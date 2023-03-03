// Decision Making
// For ... in loop

const prompt = require(`prompt-sync`)();

// Object in JS
const student = {
    name : `Ara Genius`,
    grade: 10,
    age: 5
}

for (let data in student){
    console.log(`${data} = ${student[data]}`);
}