const core = require('./core.js')

module.exports = {
  generateAttributes: generateAttributes
}

function attributeModifier(attribute){
  switch (attribute) {
    case 18:
      return "(+2)";
      break;
    case 17:
    case 16:
    case 15:
    case 14:
      return "(+1)";
      break;
    case 7:
    case 6:
    case 5:
    case 4:
      return "(-1)";
      break;
    case 3:
      return "(-2)";
      break;
    default:
      return "";
      break;
  }
}

function generateAttributes() {
  var attributeArray = []
  for (var i=0; i<6; i++){
    attributeArray.push(core.d(6) + core.d(6) + core.d(6));
  };
  console.log("\nstr: " + attributeArray[0] + " " + attributeModifier(attributeArray[0]) +
          "\nint: " + attributeArray[1] + " " + attributeModifier(attributeArray[1]) +
          "\nwis: " + attributeArray[2] + " " + attributeModifier(attributeArray[2]) +
          "\ndex: " + attributeArray[3] + " " + attributeModifier(attributeArray[3]) +
          "\ncon: " + attributeArray[4] + " " + attributeModifier(attributeArray[4]) +
          "\nchr: " + attributeArray[5] + " " + attributeModifier(attributeArray[5]));
}
