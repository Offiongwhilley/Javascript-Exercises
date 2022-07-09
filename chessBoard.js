//chessboard - my first attempt

let line1 = ` # # # #`;
let line2 = `# # # #`;

for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        console.log(line1);
    } else {
        console.log(line2);
    }
}


//a better solution

let board = "";

for(let i = 0; i < 8; i++){
 for(let a = 0; a < 8; a++){
  board += (a % 2) == (i % 2) ? " " : "#";
 }
 board += "\n";
}
console.log(board);