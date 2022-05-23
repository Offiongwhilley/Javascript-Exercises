// WHAT IS DESTRUCTURING ALL ABOUT?
//The destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//In this file, the focus is on destructuring arrays

//Rewrite the following array using  destructuring
let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

//My answer
let introduction1 = ["Hello", "I" , "am", "Sarah"];
[greeting1, , , name1] = introduction1;

console.log(greeting1, name1); //Hello Sarah
console.log(greeting1); // Hello
console.log(name1); // Sarah

//This will give you the same result, without an initial array
let [greeting1, , ,name1] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting1, name1);
console.log(greeting1);
console.log(name1);

//Note that the other elements were skipped with the use of commas


//SKIPPING ITEMS IN AN ARRAY
//Skip the first and third items in the following array
let skipArr = ["Hello", "I" , "am", "Sarah"];
[,first,,third] = skipArr;

console.log(first, third);// I Sarah

//If you log it the following way, it will return the full array with 'empty' replacing the elements you skipped, so you need to be careful
console.log([,first,,third]); // [empty, 'I', empty, 'Sarah']


//Noticed how the output returns single elements and not arrays? That's the "unpacking" that destructuring does.


//THE REST OPERATOR(...)
//What if we want to assign some of the array to variables and the rest of the items in an array to a particular variable? 

//Unpack and assign the 2nd - last part of the following array to a variable.
let restArr = ["Hello", "I" , "am", "Sarah"];
[first, ...rest] = restArr;
console.log(first); // Hello
console.log(rest); //  ['I', 'am', 'Sarah']


//THE SPREAD OPERATOR


//DESTRUCTUTING ARRAYS WITH FUNCTIONS
//We can also extract data from an array returned from a function. Let's say we have a function that returns an array

//Extract the first and second elements in the array returned from the following function
function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
}

[a, b] = getArray()
console.log(a,b); // Hello I
console.log(a); // Hello
console.log(b); // I


//USING DEFAULT VALUES
// Default values can be assigned to the variables just in case the value extracted from the array is undefined:
let defaultValue = [1, 2];

[a = 3, b = 4, c = 5] = defaultValue;

console.log(a,b,c); // 1, 2, 5
//Notice that a and b maintain their value from the original array because their values already exist, while c takes up the default value because it never existed in the original array.


//SWAPPING VALUES USING THE DESTRUCTURING ASSIGNMENT
//One more thing. We can use the destructuring assignment to swap the values of variables:

//swap the values of the following variable
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); //2 1


