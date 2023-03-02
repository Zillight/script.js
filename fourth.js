// Decision Making
// if ... else Statement

// Syntax: if (text_condition){
//      if statement body
//  }

const prompt = require("prompt-sync")();

let score = parseInt(prompt(`Enter your score: `));
if (score < 0 || score > 100){
    console.log(`Score is invalid.`);
} else if (score >= 50){
    console.log(`Congratulation! You passed.`);
} else {
    console.log(`Not yet! Try again later.`);
}