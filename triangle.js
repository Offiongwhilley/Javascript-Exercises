//looping a triangle- my first attempt

let triangle = [`#`,`##`,`###`,`####`,`#####`, `######`,`#######`];

for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i]);
}

//a better solution

for (let triangle2 = "#"; triangle2.length <= 7; triangle2 += "#") {
    console.log(triangle2);
}

let triangle3 = '#';
for (let i = 0; i < triangle3.length; triangle3 += triangle3) {
    console.log(triangle3[i]);
}