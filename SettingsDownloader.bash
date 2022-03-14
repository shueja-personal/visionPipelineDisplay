#!/bin/bash
PHOTON_IP="localhost"
PHOTON_CAMERA_NAME="NexiGo_N60_FHD_Webcam"
PHOTON_PIPELINE_NAME="pipeline"

# Photon pipeline fetch

curl -s http://${PHOTON_IP}:5800/api/settings/photonvision_config.zip --output ./downloads/photonConfig/photonConfig.zip

unzip -qo ./downloads/photonConfig/photonConfig.zip -d ./downloads/photonConfig/extracted

cp "./downloads/photonConfig/extracted/cameras/${PHOTON_CAMERA_NAME}/pipelines/${PHOTON_PIPELINE_NAME}.json" \
    ./downloads/photonPipeline

rm -r ./downloads/photonConfig/extracted/*
rm ./downloads/photonConfig/photonConfig.zip

# Limelight pipeline fetch

# the pipeline file will be at ./downloads/limelightPipeline/pipeline.vpr

node PhotonSettingsParser.js 2>&1
