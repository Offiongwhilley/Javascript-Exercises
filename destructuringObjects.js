//First, let's see why there is a need for object destructuring.

//Say we want to extract data from an object and assign to new variables. Prior to ES6, how would this be done?


let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"

//See how tedious it is to extract all the data. We have to repeatedly do the same thing. ES6 destructuring really saves the day. Let's jump right into it.

let person2 = {name2: "Sarah", country2: "Nigeria", job2: "Developer"};

//This will return error
{name2, country2, job2} = person2;
console.log(name2);

console.log(name2); //Unexpected token '='

//We forgot to add () before the curly brackets.

//The ( ) around the assignment statement is required syntax when using the object literal destructuring assignment without a declaration. This is because the {} on the left hand side is considered a block and not an object literal. So here's how to do this the right way:
({name2, country2, job2} = person2);
console.log(name2); //sarah

//You can also do this:
let {name2, country2, job2} = person2;

console.log(name2);//"Sarah"
console.log(country2);//"Nigeria"
console.log(job2);//Developer"

//The above method is shorter and easier.


//It is also valid to assign variables to an object that haven't been declared:

let {animal, color, weight} = {animal: 'dog', color: 'black', weight: 10};

console.log(animal); //dog
console.log(color); //black
console.log(weight); //10

console.log(animal, color, weight); //returns dog black 10 as single elements
console.log( {animal, color, weight}); //returns the object  {animal: 'dog', color: 'black', weight: 10};

//Note that the variables in the object on the left hand side should have the same name as a property key in the object person. If the names are different, we'll get undefined:

let person3 = {name3: "Sarah", country3: "Nigeria", job3: "Developer"};

let {name3, friends, job3} = person3;

console.log(name3);//"Sarah"
console.log(friends);//undefined


//USING A NEW VARIABLE NAME
//If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:

let person4 = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name:Mary, country:Ethiopia} = person4;

console.log(Mary);
console.log(Ethiopia);
//So the values extracted are passed to the new variables Mary and Ethiopia.


//USING DEFAULT VALUES
//Just like in array destructuring, default values can also be used in object destructuring, just in case a variable is undefined in an object it wants to extract data from:

let person5 = {name: "Sarah", country: "Nigeria", job: "Developer"};
({name = 'Offiong', friend = 'King'} = person5);

console.log(name); //returns Sarah since name already had a value.
console.log(friend); // returns King since the variable, friend, doesnt have a value/ was not initialized in the person5 object.


//COMBINING ARRAYS WITH OBJECTS
//You can also combine arrays with objects

let person6 = {name6: "Sarah", country: "Nigeria", friends6: ["Annie", "Becky"]};


let {name6, friends6} = person6;
console.log(name6, friends6[1]); // Sarah Becky
console.log(name6, friends6); // Sarah ['Annie', 'Becky']


//NESTING IN OBJECT DESTRUCTURING
let personProperty = {
    skinColor: 'black',
    place:{
        country: 'Nigeria',
        city: 'Abuja'
    },
    language: 'English'
}

console.log(place.country) //Uncaught ReferenceError: Cannot access 'place' before initialization
    

let {place, language} = personProperty

console.log(place, language) //{country: 'Nigeria', city: 'Abuja'} 'English';
console.log(place.country) //Nigeria

 
//OBJECT DESTRUCTURING AND FUNCTIONS
//Object Destructuring can be used to assign parameters to functions:



