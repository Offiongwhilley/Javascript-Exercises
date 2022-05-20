//1- iterating a string using do-while loop

const greet = 'hello ';
let i = 0;

do {
  console.log(greet + i);
  i++;
} while (i < 5);


//2- iterating an array using do-while loop
const ourArray = [];
let j = 0;

do {
  ourArray.push(j);
  i++;
} while (j < 5);


//3-Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
// Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }

do {
    myArray.push(i);
    i++;
  } while (i == 10);
  