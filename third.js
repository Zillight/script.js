// Type Conversion

let result = "4" - "Hello";
let result1 = "4" - true;
let result2 = '4' + true;
let result3 = '4' + false;
let result4 = 4 + false;

console.log(result); // Prints NaN - Not a Number
console.log(result1); // Prints 3. true = 1. false = 0.
console.log(result2); // Prints 4true
console.log(result3); // Prints 4false
console.log(result4); // Prints 4


console.log(typeof(result)); // Prints NaN - Not a Number
console.log(typeof(result1)); // Prints 3. true = 1. false = 0.
console.log(typeof(result2)); // Prints string
console.log(typeof(result3)); // Prints string
console.log(typeof(result4)); // Prints number

