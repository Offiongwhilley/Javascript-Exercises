// function countBs(string) {
//     if (string.includes('B')) {
//         let containsB = string.includes('B')
//         return containsB
//     }    
// }

// console.log(countBs('BuBBles'))

let personProperty = {
    skinColor: 'black',
    place:{
        country: 'Nigeria',
        city: 'Abuja'
    },
    language: 'English'
}

// console.log(place.country) //Uncaught ReferenceError: Cannot access 'place' before initialization
    

let {place, language} = personProperty

console.log(place, language) //{country: 'Nigeria', city: 'Abuja'} 'English';
console.log(place.country)