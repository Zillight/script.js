// Array Methods
// 8. find() method

const number = [2, 4, 7, 9, 12];

const result = number.find(function(element){
    return element > 5;
});

console.log(result); // prints 7