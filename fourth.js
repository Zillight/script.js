// Decision Making
// if ... else Statement

// Syntax: if (text_condition){
//      if statement body
//  }

const prompt = require("prompt-sync")();

const score = parseInt(prompt('Enter your score: '));
if (score >=50){
    console.log('You Passed!');
    console.log('Congratulations!');
}