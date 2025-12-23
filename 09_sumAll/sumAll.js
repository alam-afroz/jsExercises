const sumAll = function (num1, num2) {
  let newNum = 0;
  let a = num1 % 1;
  let b = num1 % 1;
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 + num2 < 0 ||
    a + b != 0
  ) {
    newNum = "ERROR";
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      newNum = newNum + i;
    }
  } else if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      newNum = newNum + i;
    }
  } else {
    newNum = "ERROR";
  }
  return newNum;
};
const sum = sumAll(1, 3);
console.log(sum);
console.log(sumAll(3, 1));
// Do not edit below this line
module.exports = sumAll;
