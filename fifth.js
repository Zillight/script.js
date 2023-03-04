// Variable Scope (Local & Global)

function addNumbers(n1, n2){
    let result = n1 = n2; // Local variable
    console.log(result);
}
let result = 123; // Global variable
addNumbers(10, 7);
console.log(result);