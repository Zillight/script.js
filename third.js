// Type Conversion

let result = "4" - "Hello";
let result1 = "4" - true;
let result2 = '4' + true;

console.log(result); // Prints NaN - Not a Number
console.log(result1); // Prints 3. true = 1. false = 0.
console.log(result2); // Prints 4true

console.log(typeof(result)); // Prints NaN - Not a Number
console.log(typeof(result1)); // Prints 3. true = 1. false = 0.
console.log(typeof(result2)); // Prints string

