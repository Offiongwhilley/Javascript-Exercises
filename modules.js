import { add } from "./functions.js";
add(1, 2)
// This will only work in test.js because that is the file linked to the html file with type "module"


//To import all, use the import * as syntax:
import * as myMathModule from "./math_functions.js";
//The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:
myMathModule.add(2,3);
myMathModule.subtract(5,3);


// To import multiple functions, use the following syntax:
import { add, subtract } from "./functions.js";