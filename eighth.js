// Array Methods
// 1. push and unshift() method

const fruits = [`apple`, `mango`, `banana`];

fruits.push(`oranges`);
console.log(fruits); // Logs [ 'apple', 'mango', 'banana', 'oranges' ]
fruits.unshift(`pawpaw`);
console.log(fruits); // Logs [ 'pawpaw', 'apple', 'mango', 'banana', 'oranges' ]

// push() takes the argument to the back of the array while unshift() takes it to the front