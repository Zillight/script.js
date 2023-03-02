// Decision Making
// Switch Statement

// Simple Calculator

const prompt = require("prompt-sync")();

const operator = prompt("Enter Operator (either + , - , *  or /):"); // take the Operator input

// take the operand input

const number1 = parseFloat(prompt(`Enter first number: `));
const number2 = parseFloat(prompt(`Enter second number: `));
let result;
switch (operator){
    case `+`:
        result = number1 + number2;
    break;
    case `-`:
        result = number1 - number2;
    break;
    case `*`:
        result = number1 * number2;
    break;
    case `/`:
        result = number1 / number2;
    break;
    default:
        console.log(`Invalid Operator`);
}
console.log(`${number1} ${operator} ${number2} = ${result}.`);