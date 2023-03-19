// map () method

// Example: Multiple the numbers in an array...
// 1. using for loop
// Using map () method

const numbers = [1, 2, 3, 4, 5];

let squared = [];

for (let i = 0; i < numbers.length; i++){
    squared.push(numbers[i]*numbers[i]);
}
console.log(numbers);
console.log(squared);