const convertToCelsius = function(farenheightVal) {
    const celsiusVal = ((farenheightVal - 32) * 5/9);
    return Number.isInteger(celsiusVal) ? celsiusVal : Number(celsiusVal.toFixed(1));
};

const convertToFahrenheit = function(celsiusVal) {
    const fahrenheightVal =  ((celsiusVal  * 9/5) + 32);
    return Number.isInteger(fahrenheightVal) ? fahrenheightVal : Number(fahrenheightVal.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
