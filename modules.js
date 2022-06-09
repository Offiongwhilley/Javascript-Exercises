import { add } from "./functions.js";
add(1, 2)
// This will only work in test.js because that is the file linked to the html file with type "module"

//To import all, use the import * as syntax
import * as myMathModule from "./math_functions.js";


// To import multiple functions, use the following syntax:
import { add, subtract } from "./functions.js";