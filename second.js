//Javascript Number Input + Typeof Operator
//To ensure we have integer input, we use parseInt()
const prompt = require("prompt-sync")();

const age = parseFloat(prompt("Enter you age: "));
console.log('You are', age); //but prompt saves input as strings

console.log(typeof(age));