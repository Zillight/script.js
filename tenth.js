// map() method

// Adding same surname to a all the string elements in an Array

// const fullName = [`Banji`, `Doyin`, `Ara`];
// let plusSurname;
// for (let i = 0; i < fullName.length ; i++){
    //         plusSurname = fullName[i] + " Olawole";
    //     console.log(plusSurname);
    // }
    
    // Using map()
// const names = [`Banji`, `Doyin`, `Ara`];
// const fullNames = names.map(function(name){
//     return name + ` Olawole`;
// })
// console.log(fullNames)

// Also

const names = [`Banji`, `Doyin`, `Ara`];
const fullName = names.map(name => name + ` Olawole`);
console.log(fullName);