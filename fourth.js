// Decision Making
// Break & Continue

// Break with While

const prompt = require(`prompt-sync`)();

while (true){
    let number = parseFloat(prompt(`Enter a number: `));
    if (number < 0){
        break; // Since this a single body conditional statement, you can do without the semicolon
    }
    console.log(number);
}

// Keeps prompting to request for number then prints, and continues until a -ve number is encountered. 