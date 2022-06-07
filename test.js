class Animals {
  constructor(name, color){
    this.name = name,
    this.color = color
  }

  greet(){
    console.log(`This is ${this.name} and she is ${this.color} in color`);
  }
}

const suzzy = new Animals('suzzy', 'white')

console.log(suzzy);
suzzy.greet();

const bingo = new Animals('bingo', 'black')
console.log(bingo);
bingo.greet()