// map () method

// Example: Multiple the numbers in an array...
// 1. using for loop

const numbers = [1, 2, 3, 4, 5];
// let squared = [];
// for (let i = 0; i < numbers.length; i++){
//     squared.push(numbers[i]*numbers[i]);
// }
// console.log(numbers); // Prints [ 1, 4, 9, 16, 25 ]
// console.log(squared);


//using map() method

const result = numbers.map(function(number){
    return number * number
})
console.log(result); // Prints [ 1, 4, 9, 16, 25 ]