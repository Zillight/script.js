// Decision Making
// While loop

const prompt = require('prompt-sync')();

const number = parseFloat(prompt(`Enter a number: `));

let count = 1;

while (count <= 10){
    let product = number * count;
    console.log(`${number} * ${count} = ${product}.`);
    count ++;
}