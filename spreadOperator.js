// The spread operator is used to expand an array element into all it's elements. that is, taking all the elemets out of an array and writing them manually. 

//It is used on the right side of the equality operator, unlike the rest operator which is used on the left side.

//E.g, you want to add to the following array:
const arr = [1, 2, 3]

//you'll do this:
const newArr = [...arr, 4, 5];

const anotherArr = [0, ...arr]

console.log(newArr); //[1, 2, 3, 4, 5]
console.log(anotherArr); //[0, 1, 2, 3]

//So it doesnt have to be the last element in the array, unlike the rest operator. It can be used anywhere, provided it is on the right hand of the operator

//Note that if you pass in an array into another array without the rest operator(...), it will return is nested array. E.g:
const yestAnotherArr = [0, arr];
console.log(yestAnotherArr); //[0, [123]]


//There are two important uses/use cases of the spread operator:
//1. To create copies of an array
//2. To merge two arrays together


//copy array
const originalArr = [123, 456];
const copyArr = [...originalArr];

console.log(copyArr); //[123, 456]

//merge arrays
const firstArr = ['mango', 'orange'];
const secondArr = ['orange'];
const mergeArr = [...firstArr, ...secondArr];

console.log(mergeArr); //(3) ['mango', 'orange', 'orange']