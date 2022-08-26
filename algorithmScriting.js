// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
    let fahrenheit;
    return fahrenheit;
  }
  
  convertCtoF(30);

  //answer
  function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);



//Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.
function reverseString(str) {
    return str;
  }
  
  reverseString("hello");

  //answer
  function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let strSplit = str.split('');
  
    //Step 2. Use the reverse() method to reverse the new created array
    let reverseStr = strSplit.reverse();
  
    //Step 3. Use the join() method to join all elements of the array into a string
    let joinStr = reverseStr.join('')
    
    return joinStr;
  }
  
  reverseString("hello");

  //you can chain all three methods together
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");



//Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    return num;
  }
  
  factorialize(5);

//answer
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  
  factorialize(5);



  //Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    return longestWord; //6
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //answer
  function findLongestWordLength(str) {
    // Step 1. Split the string into an array of strings
    // Make sure to include a space in between the quotes
    // in the split method. This makes sure we are splitting
    // the array into whole words rather than each letter.
    let strSplit = str.split(' ');
      
    // Step 2. Initiate a variable that will hold the length of the longest word (counter)
    let longestWord = 0;
  
    // Step 3. Create the FOR loop
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
      longestWord = strSplit[i].length; // ...then longestWord takes this new value
       }
    }
    //Step 4. Return the longest word
    return longestWord; // 6
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");



  //Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//answer
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}



//Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {

  if(str.charAt(str.length-1) == target){
    console.log(true);
  }else{
      console.log(false);
  }
}

confirmEnding("Bastian", "n"); //true
confirmEnding("edem", "f");//false



//Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

// answer
//It would have been simple to do this with the string repeat method
function repeatStringNumTimes(str, num) {
  console.log(str.repeat(num));
}

repeatStringNumTimes("abc", 3);

//But the instruction is that we shouldnt use the repeat method. So it goes:
function repeatStringNumTimes(str, num) {
  let repeat = '';

  while(num > 0){
    repeat += str;
    num --;
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);



//Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//answer
function truncateString(str, num) {
  if(str.length > num){
    return str.slice(0, num) + '...'
  }
  return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



//Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//answer
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);



//Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  return bool;
}

booWho(null);

//answer
function booWho(bool) {
  if(typeof bool == 'boolean'){
    return true
  }else{
    return false
  }
}

booWho(null);



// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

//my attempt
function titleCase(str) {
  let newStr = str.split(' ');

  for (let st in newStr) {
      let result = st.toUpperCase();
      console.log(result)
      }
  }    
  
  titleCase("I'm a little tea pot");
//answer
//Code Explanation
// Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}



//Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//my attempt
function frankenSplice(arr1, arr2, n) {
  arr2 = arr1.slice(n)
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//answer
// Problem Explanation
// We need to copy each element from the first array into the second array starting at the index n. We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.

// Hints
// Hint 1
// Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

// Hint 2
// Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

// Hint 3
// Increment the index after performing the splice.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}



//Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//my attempt
function bouncer(arr) {
  for(let i = 0; i < arr; i++){
    if(typeof arr[i] == 'boolean'){
      arr.remove(i)
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//answer
//create a new empty array
//check that it doesn't have a falsy value
//if true, push to new array
//return new array
function bouncer(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);



//Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  return arr;
}

getIndexToIns([40, 60], 50);

//answer
// Problem Explanation
// This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

// Hint 1
// The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

// Hint 2
// Once the array is sorted, then just check for the first number that is bigger and return the index.

// Hint 3
// If there is no index for that number then you will have to deal with that case too.

Solution
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}
// Code Explanation
// First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
// Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.



//Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//answer
function chunkArrayInGroups(arr, size) {
  let temp = [];
let result = [];

for (let a = 0; a < arr.length; a++) {
  if (a % size !== size - 1) temp.push(arr[a]);
  else {
    temp.push(arr[a]);
    result.push(temp);
    temp = [];
  }
}

if (temp.length !== 0) result.push(temp);

return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
