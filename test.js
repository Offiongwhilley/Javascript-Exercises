let eatery1 = {
    name:'mr. bigs',
    numOfGuests: 20
}

let eatery2 = {
    name: 'mr. fans',
    owner:'okoronkwo'
}

eatery2.numOfGuests = eatery1.numOfGuests || 10;

console.log(eatery2.numOfGuests);