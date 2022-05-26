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