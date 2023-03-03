// Decision Making
// Break & Continue

// Continue with While

const prompt = require(`prompt-sync`)();

while (true){
    let number = parseFloat(prompt(`Enter a number: `));
    if (number < 0){
        console.log(`Negative`);
        continue; 
    }
    console.log(number);
}

// Continue is direct opposite of break in the sense that it skips when the conditional statement is reached but continues with the code.