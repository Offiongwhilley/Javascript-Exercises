//1-output the content of the following nested array

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  //This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  //to output only the content of arr the way it is without the contents one after the other, do this
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }



  //2-Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

  function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  