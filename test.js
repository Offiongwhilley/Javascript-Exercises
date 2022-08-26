function Dog(name) {
  this.name = name;
  this.color = 'brown'
}
Dog.prototype.numLegs = 2


// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle); // Dog {name: 'Snoopy'}
console.log(beagle.numLegs); // 2