// The Sum of a Range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments
// of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
function range(start, end) {
    console.log(start.concat(end));
  }
  
  range([1, 2, 3], [4, 5, 6])
  
  
  function sum(numbers = []) {
    let counter = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      console.log(counter += numbers[i]);
    }
  }
  
  sum([1, 2, 3, 4, 5])
  
  
  // function range(start, end, step) {
  //   let output = start.concat(end);
  
  //   if (output%step == 0) {
    
  //   }else{
  //   console.log(output);
  //   }
  // }
  
  // range([1, 2, 3], [4, 5, 6],)
  