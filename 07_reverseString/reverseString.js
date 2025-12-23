const reverseString = function (word) {
  arr = word.split("");
  let arr2 = arr.reverse();

  arr3 = arr2.join("");
  return arr3;
};
console.log(reverseString("memes"));
// Do not edit below this line
module.exports = reverseString;
