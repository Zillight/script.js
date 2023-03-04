// Variable Scope (Local & Global)
// To make local variable global

let result;
function addNumbers(n1, n2){
    result = n1 = n2; // Local variable... ensure that it is not declared here
    console.log(result);
}
addNumbers(10, 7);
console.log(result);