//Short circuting
//The logical operators can be used in short circuiting

//The || operator will return the first true value

console.log(undefined || 0 || ''); //returns ''

//The && operator works the opposite way. It will keep evaluating through all true values and return the first false value. If all the values are true, it keeps evaluating until the last true value and then returns that true value.

console.log(1 && true && 'hello'); //hello
console.log(1 && true && 'hello' && 0); //0


//Let's look at a real world example. Let's say that when the restaurant is open, you'd call the orderFood function so you can buy food. 

let restaurantOpen = true;

function orderFood(food) {
    console.log('I want to eat ' + food);
}

//You can do the following with an if statement:

if (restaurantOpen) {
    orderFood('fried rice')
} //I want to eat fried rice 


//You can do the same thing with short circuiting. So if restaurantOpen is false, it will short circuit and the code will not be executed. Else, the followig code/function will be executed.
restaurantOpen && orderFood('fried rice and chicken') //I want to eat fried rice


//THE NULLISH COALESCING OPERATOR
//It works with the idea of nullish values. And nullish values are null and undefined. It does not include 0 and ''.
console.log(0 ?? 10); //returns 0. If we had used the || operator, it would have returned 10 because the or operator returns the first true value.


//LOGICAL ASSIGNMENT OPERATOR

//In the following two objects, eatery 2 does not have the numOfGuests property. But we can use the logical assignment operator to give new property and assign values:

let eatery1 = {
    name:'mr. bigs',
    numOfGuests: 20
}

let eatery2 = {
    name: 'mr. fans',
    owner:'okoronkwo'
}

eatery2.numOfGuests = eatery1.numOfGuests || 10;

console.log(eatery2.numOfGuests); // 20. If eatery1.numOfGuests was a falsy value or did not exist, the output would be 10.
