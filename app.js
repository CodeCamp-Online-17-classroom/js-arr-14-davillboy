// write code here
function clone(arr) {
  return arr.slice();
}

const originalArray = [1, 2, 3, 4, 5];
const clonedArray = clone(originalArray);
console.log(clonedArray); // [1, 2, 3, 4, 5]
