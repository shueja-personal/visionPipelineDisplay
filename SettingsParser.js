'use strict';

const fs = require('fs');
const readline = require('readline');

let photonRawData = fs.readFileSync('./downloads/photonPipeline/pipeline.json', 'utf-8');
let photonJson = JSON.parse(photonRawData);
let photonSettings = photonJson[1];

let limelightRawData = fs.readFileSync('./downloads/limelightPipeline/pipeline.vpr', 'utf-8');
let limelightSettings = {};
limelightRawData.split(/\r?\n/).forEach(function(line){
    // Each line in input.txt will be successively available here as `line`.
    let pair = line.split(":");
    limelightSettings[pair[0]] = pair[1];
  }
);

let page = `
<!DOCTYPE html>
<html>
  <head>
    <title>App</title>
    <link rel="stylesheet" href="../App.css" />
  </head>
  <body>
    <div class="photonSettings">
    <h1>PhotonVision</h1>
    <span>Exposure: ${photonSettings.cameraExposure} </span>
    </div>

    <div class="limelightSettings">
    <h1>Limelight</h1>
    <span id=>Exposure: ${limelightSettings.exposure} </span>
    </div>
  </body>
</html>
`;

fs.writeFileSync("./output/photon.html", page);
console.log("Done");
