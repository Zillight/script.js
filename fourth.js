// Decision Making
// Break & Continue

// Break & Continue with While

const prompt = require(`prompt-sync`)();

for (let i = 1; i <= 5; i++){
    if (i == 3){
        continue;
    }
    console.log(i);
}

// Prints 1, 2, 4, 5.