// Decision Making
// For Loop

const prompt = require(`prompt-sync`)();
const number = parseInt(prompt(`Enter a number: `));

for (let count = 1; count <= 10; count++){
    let product = count * number;
    console.log(`${number} * ${count} = ${product}.`)
}