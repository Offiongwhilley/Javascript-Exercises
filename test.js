// function countBs(string) {
//     if (string.includes('B')) {
//         let containsB = string.includes('B')
//         return containsB
//     }    
// }

// console.log(countBs('BuBBles'))

const nameString = 'Offiong';

console.log(...nameString); // returns individual elemnts - O f f i o n g
const fullString = [...nameString, '', 'E'];
console.log(fullString); //(9) ['O', 'f', 'f', 'i', 'o', 'n', 'g', '', 'E']
