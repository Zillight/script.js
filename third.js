// Logical Operator

// && AND Operator - Both
// || OR Operator - Either
// ! Not Operator - -Ve 

const age = 18;
const height = 5.5;
let result = age >= 18 && height < 5;
console.log(result); // Prints false
result = height > 6;
console.log(result); // Prints false
console.log(!result); // Prints true, ought to be false but ! operator changed it.
console.log(age < 18 || height >= 5); //Prints true because either is true
