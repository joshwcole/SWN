module.exports = {
  d: d,
  generateWorld: generateWorld
}

function d(val) {
  return Math.floor(Math.random()*(val)+1);
}

function roll2d(val) {
  return d(val) + d(val)
}

function determineAtmosphere() {
  var atmosphere = ["Corrosive", "Inert gas", "Airless", "Breathable", "Breathable", "Breathable", "Breathable", "Breathable", "Thick atmosphere", "Toxic", "Corrosive and invasive"];
  return atmosphere[roll2d(6)-1];
}

function determineTemperature() {
  var temperature = ["Frozen", "Cold", "Chill", "Chill", "Temperate", "Temperate", "Temperate", "Warmish", "Warmish", "Warm", "Burning"];
  return temperature[roll2d(6)-1];
}

function determineBiosphere() {
  var biosphere = ["Biosphere remnants", "Microbal Bio", "No Bio", "No Bio", "Human-micible bio", "Human-micible bio", "Human-micible bio", "Immicible bio", "Immicible bio", "Hybrid bio", "Engineered Bio"];
  return biosphere[roll2d(6)-1];
}

function determinePopulation() {
  var population = ["Failed colony", "Outpost", "Tens of Thousands", "Tens of Thousands", "Hundreds of Thousands", "Hundreds of Thousands", "Hundreds of Thousands", "Millions", "Millions", "Billions", "Aliens"];
  return population[roll2d(6)-1];
}

function determineTechLevel() {
  var techLevel = ["TL 0", "TL 1", "TL 2", "TL 3", "TL 3", "TL 4", "TL 4", "TL 4", "TL 4", "TL 4 with pre-tech or specialities", "TL 5"];
  return techLevel[roll2d(6)-1];
}

function determineWorldTags () {
  var worldTags = [
    ["Abandoned Colony", "Alien Ruins", "Altered Humanity", "Area 51", "Badlands World", "Bubble Cities", "Civil War", "Cold War", "Colonized Population", "Desert World"],
    ["Eugenic Cult", "Exchange Consulate", "Feral World", "Flying Cities", "Forbidden Tech", "Freak Geology", "Freak Weather", "Friendly Foe", "Gold Rush", "Hatred"],
    ["Heavy Industry", "Heavy Mining", "Hostile Biosphere", "Hostile Space", "Local Speciality", "Local Tech", "Major Scrapyard", "Minimal Contact", "Misandry/Misogyny", "Oceanic World"],
    ["Out of Contact", "Outpost World", "Perimeter Agency", "Pilmgrimage Site", "Police State", "Preceptor Archive", "Pretech Cultists", "Primitive Aliens", "Psionics Fear", "Psionics Worship"],
    ["Psionics Academy", "Quarantined World", "Radioactive World", "Regional Hegemon", "Restrictive Laws", "Rigid Culture", "Seagoing Cities", "Sealed Menace", "Sectarians", "Seismic Instability"],
    ["Secret Masters", "Theocracy", "Tomb World", "Trade Hub", "Tyranny", "Unbraked AI", "Warlords", "Xenophiles", "Xenophobes", "Zombies"]
  ]
  return worldTags[d(6)-1][d(10)-1];
}

function generateWorld () {
  console.log("Atmos: " + determineAtmosphere());
  console.log("Temp:  " + determineTemperature());
  console.log("Bios:  " + determineBiosphere());
  console.log("Pop:   " + determinePopulation());
  console.log("Tech:  " + determineTechLevel());
  console.log("Tag 1: " + determineWorldTags());
  console.log("Tag 2: " + determineWorldTags());
}
