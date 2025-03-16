const convertToCelsius = function(value) {
  let converted = (value - 32) * 5/9;
  return +converted.toFixed(1);
};

const convertToFahrenheit = function(value) {
  let converted = (value * 9/5 + 32);
  return +converted.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
