const core = require('./core.js');
const gen = require('./generator.js');
const npc = require('./npcgenerator.js');



var x;
var makeWorldButton = document.getElementById('makeWorld')
makeWorldButton.addEventListener('click', returnMakeWorld);

var generateNPC = document.getElementById('genNPC');
generateNPC.addEventListener('click', returnNpc);

var generatePlace = document.getElementById('genPlace');
generatePlace.addEventListener('click', returnPlace);

var generateName = document.getElementById('genName');
generateName.addEventListener('click', returnName);

var startTimer = document.getElementById('starttimer');
startTimer.addEventListener('click', returnStartTimer);

var stopTimer = document.getElementById('stoptimer');
stopTimer.addEventListener('click', returnResetTimer);

function returnStartTimer() {
  var startTime = new Date().getTime();
  x = setInterval(function() {
    var now = new Date().getTime();
    var elapsedTime = now - startTime;
    var hours = `00${Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    var minutes = `00${Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    var seconds = `00${Math.floor((elapsedTime % (1000 * 60)) / 1000)}`.slice(-2);
    document.getElementById('timerOutput').innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

function returnResetTimer() {
  clearInterval(x)
  document.getElementById('timerOutput').innerHTML = `<span style="color:lightgrey">00:00:00</span>`;
};

function returnMakeWorld() {
  document.getElementById("output").innerHTML = gen.generateWorld();
}

function returnNpc() {
  document.getElementById("npcoutput").innerHTML = npc.npcgen();
}

function returnPlace() {
  console.log(document.getElementById("nationalityInput").value)
  var nationality = document.getElementById("nationalityInput").value
  var place = gen.place(nationality)
  document.getElementById("placeoutput").innerHTML = place;
}

function returnName() {
  var nationalityList = document.getElementById("nationalityInput");
  var nationality = nationalityList.options[nationalityList.selectedIndex].value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var name = gen.name(nationality, gender)
  document.getElementById("nameoutput").innerHTML = name;
}
