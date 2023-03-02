// Decision Making
// if ... else Statement

// Syntax: if (text_condition){
//      if statement body
//  }

const prompt = require("prompt-sync")();

let number = parseFloat(prompt(`Enter a number: `))

if (number > 0)
console.log(`Positive`);
else if (number < 0)
console.log(`Negative`);
else
console.log(`Zero`);

// You can do without the curly braces if the statement has only one condition.