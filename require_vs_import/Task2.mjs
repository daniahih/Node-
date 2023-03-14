import subtract from "./func1.mjs";
import add from "./func2.mjs";
import multiply from "./func3.mjs";
// What is the difference between import and require?
//IMPORT = 1) Can only be called in the begining of the file,
//REQUIRE = 1) Can be called anywhere anytime

console.log("add(5,7) = ", add(5, 5));
console.log("subtract(6,1) = ", subtract(5, 1));
console.log("multiply(2,3) = ", multiply(2, 3));
