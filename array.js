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



//Iterate Through All an Array's Items Using For Loops
// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

// Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

