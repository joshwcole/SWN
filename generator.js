const constants = require('./constants.js')
const core = require('./core.js')

module.exports = {
  generateSystem: generateSystem,
  generateWorld: generateWorld,
  name: name,
  place: place,
  adventure: adventure
}

function determineAtmosphere() {
  return constants.atmosphere[core.roll2d(6)-1];
}

function determineTemperature() {
  return constants.temperature[core.roll2d(6)-1];
}

function determineBiosphere() {
  return constants.biosphere[core.roll2d(6)-1];
}

function determinePopulation() {
  return constants.population[core.roll2d(6)-1];
}

function determineTechLevel() {
  return constants.techLevel[core.roll2d(6)-1];
}

function determineWorldTags() {
  return constants.worldTags[core.d(6)-1][core.d(10)-1];
}

function determineCulture() {
  return constants.cultures[core.d(8)-1];
}

function generateWorld() {
  console.log("Cult:  " + determineCulture());
  console.log("Atmos: " + determineAtmosphere());
  console.log("Temp:  " + determineTemperature());
  console.log("Bios:  " + determineBiosphere());
  console.log("Pop:   " + determinePopulation());
  console.log("Tech:  " + determineTechLevel());
  console.log("Tag 1: " + determineWorldTags());
  console.log("Tag 2: " + determineWorldTags());
}

function generateSystem() {
  var totalPlanets = core.d(3);
  console.log(totalPlanets + " planets in the system.");
  for (var i=0; i<totalPlanets; i++){
    console.log("\nPLANET " + i + ":");
    console.log(generateWorld());
  };
}


function adventure() {
  return constants.adventures[core.d(100)-1];
}

function genderToVal(gender) {
  if (gender.toLowerCase() == "m") {
    return 0;
  } else if (gender.toLowerCase() == "f"){
    return 1;
  } else {
    return core.d(2) - 1;
  }
  console.log("Something went wrong, " + gender + " is not valid for genderToVal.");
}

function name(nation, gender) {
  switch (nation.toLowerCase()) {
    case "arb":
      return constants.arabicNames[core.d(25)-1][genderToVal(gender)] + " " + constants.arabicNames[core.d(25)-1][2];
      break;
    case "chi":
    case "chin":
      return constants.chineseNames[core.d(25)-1][genderToVal(gender)] + " " + constants.chineseNames[core.d(25)-1][2];
      break;
    case "eng":
      return constants.englishNames[core.d(25)-1][genderToVal(gender)] + " " + constants.englishNames[core.d(25)-1][2];
      break;
    case "ind":
      return constants.indianNames[core.d(25)-1][genderToVal(gender)] + " " + constants.indianNames[core.d(25)-1][2];
      break;
    case "jap":
      return constants.japaneseNames[core.d(25)-1][genderToVal(gender)] + " " + constants.japaneseNames[core.d(25)-1][2];
      break;
    case "nig":
      return constants.nigerianNames[core.d(25)-1][genderToVal(gender)] + " " + constants.nigerianNames[core.d(25)-1][2];
      break;
    case "rus":
      return constants.russianNames[core.d(25)-1][genderToVal(gender)] + " " + constants.russianNames[core.d(25)-1][2];
      break;
    case "spa":
      return constants.spanishNames[core.d(25)-1][genderToVal(gender)] + " " + constants.spanishNames[core.d(25)-1][2];
      break;
  }
};

function place(nation){
  switch (nation) {
    case "arb":
      return constants.arabicPlaces[core.d(50)-1];
      break;
    case "chi":
    case "chin":
      return constants.chinesePlaces[core.d(50)-1];
      break;
    case "eng":
      return constants.englishPlaces[core.d(50)-1];
      break;
    case "ind":
      return constants.indianPlaces[core.d(50)-1];
      break;
    case "jap":
      return constants.japanesePlaces[core.d(50)-1];
      break;
    case "nig":
      return constants.nigerianPlaces[core.d(50)-1];
      break;
    case "rus":
      return constants.russianPlaces[core.d(50)-1];
      break;
    case "spa":
    case "span":
      return constants.spanishPlaces[core.d(50)-1];
      break;
  };
};
