// Object Methods - contains functions

const person = {
    name:'Ara',     // Object properties
    age: 2,
    greet: function(){
        console.log("Hello", person.name);
    }
}

person.greet(); // Prints Hello Ara