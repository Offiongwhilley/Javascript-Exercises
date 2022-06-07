// ES6 provides a new syntax to create objects, using the class keyword.
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// Imagine creating a similar object for 1000 different persons. That wouldn't be fun. That's where constructors come in.
// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

//Example 1
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');

// Example 2
class Animals {
  constructor(name, color){
    this.name = name,
    this.color = color
  }

  greet(){
    console.log(`This is ${this.name} and she is ${this.color} in color.`);
  }
}

const suzzy = new Animals('suzzy', 'white')
console.log(suzzy); // Animals {name: 'suzzy', color: 'white'}
suzzy.greet(); // This is suzzy and she is white in color.

const bingo = new Animals('bingo', 'black')
console.log(bingo); // Animals {name: 'bingo', color: 'black'}
bingo.greet() // This is bingo and she is black in color.


// Basic Concepts to Know About JavaScript Constructors
One essential thing to know is that you need to capitalize the name of constructors to distinguish them from regular functions.
Another is that constructors call with the "new" operator.


//   It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
//   Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
//   The constructor method is a special method for creating and initializing an object created with a class.

//EXERCISE
// // Only change code below this line
class Vegetable{
    constructor(plant){
      this.name = plant
    }
  }  
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


// Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.
// These are classically called getters and setters.
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
// Example
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
  
// EXERCISE
