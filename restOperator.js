//JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.
//The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

//WHAT IS THE REST OPERATOR?
//The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.

//Here is a basic example
let testRest = ['hi', 'my', 'name', 'is', 'Offiong']

let [first, second, ...rest] = testRest;

console.log(rest); // ['name', 'is', 'Offiong']
console.log(first, second); //hi my
console.log(first, second, rest);// hi my  ['name', 'is', 'Offiong']

//It is used on the left hand side of the assignment operator.
//It must be the last element in an array


//USING THE REST OPERATOR IN DESTRUCTURING ASSIGNMENT
//Extract the first 3 weekdays from the nested object below and save the rest into a rest element


const restaurant= {
    openingHours:{
        monday:{
            time:'8am'
        },
        tuesday:{
            time:'9am'
        },
        wednesday:{
            time:'8:30am'
        },
        thursday:{
            time:'8:30am'
        },
        friday:{
            time:'8:30am'
        },
        saturday:{
            time:'8:30am'
        },
        sunday:{
            time:'8:30am'
        }

    }
}

const {monday, tuesday, wednesday, ...restOfTheWeek} = restaurant.openingHours;

console.log(restOfTheWeek) // {thursday: {…}, friday: {…}, saturday: {…}, sunday: {…}}
console.log({monday}); // {monday: {…}}
console.log(monday); //{time: '8am'}


//USING THE REST OPERATOR IN FUNCTIONS

//Imagine that you want to sum 100 arguements in a function. how do you add 100 arguements to a function? wont that be redundant andstressful?

//Here's how to do it with the rest operator

let add = function (...numbers) {
    //define a loop to add the numbers in the rest element, no matter how many they may be.

   let sum = 0;
   for(let i = 0; i < numbers.length; i++)
   sum += numbers[i];
   console.log(sum);
}

add(1, 2) //3
add(1, 44, 6, 9, 11, 122) // 193


//The function below is the same as the one above. the difference is the curly braces after the for loop, which ends after the console log, and it threw me an error. Had to document it for future ref.
let add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum);

}

add(1, 2) //outputs 1, 3, 8, imstead of just 8. awhich means it returns the answer after the addition of each number, instead of the total after adding all the numbers. 

