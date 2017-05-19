const constants = require('./constants.js')
const core = require('./core.js')

module.exports = {
    npcgen: npcgen
}

function gender() {
  return core.d(2) == 1 ? "Female" : "Male";
}

function age() {
  return core.d(3) == 1 ? "Young" : core.d(2) == 1 ? "Middle-Aged" : "Old";
}

function height() {
  return constants.heights[core.d(8)-1];
}

function problem() {
  return constants.problems[core.d(10)-1];
}

function jobMotivation() {
  return constants.jobMotivations[core.d(12)-1];
}

function quirk() {
  return constants.quirks[core.d(20)-1];
}

function npcgen() {
  return `<b>Gender</b>: ${gender()}<br><b>Age</b>: ${age()}<br><b>Height</b>: ${height()}<br><b>Problem</b>: ${problem()}<br><b>Motive</b>: ${jobMotivation()}<br><b>Quirk</b> : ${quirk()}<br>`
}
