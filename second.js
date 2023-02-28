//Javascript Number Input + Typeof Operator
const prompt = require("prompt-sync")();

const age = prompt("Enter you age: ");
console.log('You are', age); //but prompt saves input as strings

console.log(typeof(age));