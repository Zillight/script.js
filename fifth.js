// Variable Scope (Local & Global)
// Avoid using global variable because it can be be change anywhere within the program.

let message = `Hello`;
function changeGreeting(){
    message = `Hi`;
}
console.log(message);   // Hello
changeGreeting();       //The variable wont change if the function is not called
console.log(message);   // Hi

