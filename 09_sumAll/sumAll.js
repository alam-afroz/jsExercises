const sumAll = function (num1, num2) {
  let newNum = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 + num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      newNum = newNum + i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      newNum = newNum + i;
    }
  }
  return newNum;
};
console.log(sumAll(1, 3));

console.log(sumAll(3, 1));
// Do not edit below this line
module.exports = sumAll;
