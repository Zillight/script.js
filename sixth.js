// Strings Methods
// Search() Method

const letter = `Javascript is fun`;
const result = letter.search(`fun`);
// searches for the substring in the given string
console.log(result); // 14

const result1 = letter.search(`funny`);
console.log(result1); // -1 indicates that no such word can be found in the string