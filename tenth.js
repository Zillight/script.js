// map() method

const numbers = [1, 2, 3, 4, 5];
let squared = [];
for  (let i = 0; i < numbers.length; i++){
    squared.push(numbers[i]*numbers[i]);
}
console.log(squared)

// using Map()

// const result=numbers.map(function(number){
//     return number * number
// })
// console.log(result)

// Also
// const result = numbers.map(function sqaure(number) {
//     return number * number})
// console.log(result)

// Also... with arrow function.
// const result = numbers.map((number) => {
//     return number * number
// })
// console.log(result)

// Shorthand Arrow function

const result = numbers.map(number => number * number)
console.log(result)

// This indicates that Arrow function can work without the parenthesis around the parameter,
// when there is only one parameter.