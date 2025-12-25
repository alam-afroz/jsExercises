const convertToCelsius = function (temp) {
  let c = (temp - 32) * (5 / 9);
  let a = Math.round(10 * c) / 10;

  return a;
};

const convertToFahrenheit = function (temp) {
  let f = temp * (9 / 5) + 32;
  return Math.round(10 * f) / 10;
};
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37.78));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
//
//
// X f= (X-32)*5/9 c
// X C=X*9/5+32 F
