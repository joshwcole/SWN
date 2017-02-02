//import pry from 'pryjs'
//pry = require('pryjs')

const constants = require('./constants.js')

module.exports = {
  d: d,
  generateSystem: generateSystem,
  generateWorld: generateWorld,
  determineAtmosphere: determineAtmosphere
}

function d(val) {
  return Math.floor(Math.random()*(val)+1);
}

function roll2d(val) {
  return d(val) + d(val)
}

function determineAtmosphere() {
  return constants.atmosphere[roll2d(6)-1];
}

function determineTemperature() {
  return constants.temperature[roll2d(6)-1];
}

function determineBiosphere() {
  return constants.biosphere[roll2d(6)-1];
}

function determinePopulation() {
  return constants.population[roll2d(6)-1];
}

function determineTechLevel() {
  return constants.techLevel[roll2d(6)-1];
}

function determineWorldTags() {
  return constants.worldTags[d(6)-1][d(10)-1];
}

function generateWorld() {
  console.log("Atmos: " + determineAtmosphere());
  console.log("Temp:  " + determineTemperature());
  console.log("Bios:  " + determineBiosphere());
  console.log("Pop:   " + determinePopulation());
  console.log("Tech:  " + determineTechLevel());
  console.log("Tag 1: " + determineWorldTags());
  console.log("Tag 2: " + determineWorldTags());
}

function generateSystem() {
  var totalPlanets = d(3);
  console.log(totalPlanets + " planets in the system.");
  for (var i=0; i<totalPlanets; i++){
    console.log("\nPLANET " + i + ":");
    console.log(generateWorld());
  };
}
