// Block Scope
// Restricts the variable inside the block

const addNumbers = (n1, n2) => {
    let result = n1 + n2;
    console.log(result);
    if (result > 10){
        let result1 = `Positive`;
        console.log(result1);
    }
    // console.log(result1);    // Prints error
}
// console.log(result1);        // result prints error anywhere else other than inside the block
addNumbers(4,9);