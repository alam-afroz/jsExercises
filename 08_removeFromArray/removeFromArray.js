const removeFromArray = function (arr, ...element) {
  const newArray = [];

  arr.forEach(function items(items) {
    if (!element.includes(items)) {
      newArray.push(items);
    }
  });

  return newArray;
};
console.log(removeFromArray(["a", "s", "w", 3, 6, "9"], 6, "s", "9"));
// Do not edit below this line
module.exports = removeFromArray;
