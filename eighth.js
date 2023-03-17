// Array Methods
// 6. splice() method

const arr = ["Hello", "Bonjour", 'Salut', 'Oui', 'Non'];
arr.splice(0, 2, 'Hi') // splice (0,2) removes the 0th and 1st index element and replaces them with the new string 
console.log(arr); // Prints [ 'Hi', 'Salut', 'Oui', 'Non' ]