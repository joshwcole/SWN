module.exports = {
  d: d,
  roll2d: roll2d,
  roll3d: roll3d,
}

function d(val) {
  return Math.floor(Math.random()*(val)+1);
}

function roll2d(val) {
  return d(val) + d(val);
}

function roll3d(val) {
  return d(val) + d(val) + d(val);
}
