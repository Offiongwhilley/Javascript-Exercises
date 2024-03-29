//Declare a variable x. Assign it a value which is the remainder from 16 divided by 3. 
// Declare a variable y. Assign it a string value of ‘Hi I am yourstackupname’. Replace yourstackupname with your own StackUp username. 
// Split y by the space in between the words. Assign the resulting array to a new variable z. 
// Declare an object person. Give it 3 properties: firstName, age and eyeColor.
// For the firstName property, assign it the value of your StackUp username. However, you must use the z variable for this.
// For the age property, assign it the value of x multiplied by 10.
// For the eyeColor property, assign it the string value of ‘brown’. 
// Finally, display in the output, the value of the person’s age and the value of the person’s first name. Ensure that these two values are separated by a space.


const x = 16 % 3;
const y = "Hi I am Offiong";
const z = y.split(' '); // if you do not add space between the parenthesis, it will return a list/array of all the letters, instead of the words.
console.log(z);
const person = {
    firstName:z[3],
    age: x * 10,
    eyeColor: 'brown'
}

console.log(person.age + ' ' + person.firstName);


////Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string. 

function countBs(string, ) {
    console.log(string.split('B').length-1);
}

countBs('i am BubbBles')

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs(string, letter) {
    console.log(string.split(letter).length-1);
}

countBs('i am BubbBles', 'B')


//convert string to upper case
let myStr = 'hello world'
console.log(myStr.toUpperCase());

//convert string to lower case
let myStr2 = 'HELLO WORLD'
console.log(myStr2.toLowerCase());

//Split, Reverse and Join string
//You can split a string on every occurrence of another string with split and join it again with join.
//More details in algorithmScripting.js

let str = 'Hello Offiong';

console.log(str.split('').reverse().join(' ')); //g n o i f f O   o l l e H

let sentence = "Secretarybirds specialize in stomping"; 
let words = sentence.split(" "); 
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"] 
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping



//A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.
let str = 'Hello ';

console.log(str.repeat(3)); //Hello Hello Hello


