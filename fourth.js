// Decision Making
// Break & Continue

// Break & Continue with For & While

const prompt = require(`prompt-sync`)();

while (true) {
    let number = parseFloat(prompt(`Enter a number: `));
    if (number <= 0){
        console.log(`Zero. Negative!
    The END!`);
        break;
    }
    if (number % 2 != 0){
        console.log(`Odd! Try again.`);
        continue;
    }
    console.log(number);

}

// Prints 1, 2, 4, 5.