//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

//Add the number to the end of the array, then remove the first element of the array.

//The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  arr.push(item);
  let remove = arr.shift()
  return remove;
}

const testArr = [0, 1, 2, 3, 4, 5];
const testNum = 6;
console.log(nextInLine(testArr, testNum))  // 0


function myFunc(arr, item) {
  arr.push(item)
  let result = arr.shift()
  console.log(result)
}

let myarr = [1, 2, 3]
let mynum = 4

myFunc(myarr, mynum) // 1

