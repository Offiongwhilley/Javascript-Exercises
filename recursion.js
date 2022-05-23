//1-Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if (n <= 0){
      return 0;
    } else {
      return sum(arr, n-1) + arr[n-1]
    }
  }


  //2- multiply the first n elements of an array to create the product of those elements.

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

  
  //3- program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);
  
    // decrease the number value
    const newNumber = number - 1;
  
    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
  }
  
  countDown(4);


  //4 -A recursive function that  takes a single parameter, number, returns true if the number is even, and false if the number is odd.
  
  