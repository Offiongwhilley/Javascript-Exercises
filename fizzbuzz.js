//fizzbuzz - my first attempt
//prints fizzbuzz if i is divisible by 3 and 5
//prints buzz if i is divisible by 5
//prints fizz if i is divisible by 3

for (let i = 1; i <= 30; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    }else if (i % 3 == 0) {
        console.log('fizz');;
    }else
        console.log(i);
}
