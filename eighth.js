// Array Methods
// 5. slice() method

const arr = ["Hello", "Bonjour", 'Salut', 'Oui', 'Non'];
let newArr = arr.slice(0,3); // Slice() takes two parameters(start, end+1)
console.log(newArr); // Prints [ 'Hello', 'Bonjour', 'Salut' ]

newArr = arr.slice(2); // started at position 2 and prints till the end.
console.log(newArr); // Prints [ 'Salut', 'Oui', 'Non' ] 
