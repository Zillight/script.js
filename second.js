const prompt = require("prompt-sync")();
const my_name = prompt("Enter your name: ");
console.log("Hello,", my_name);
console.log("Hello,"+ my_name); //Adds the strings and the variable together without adding space