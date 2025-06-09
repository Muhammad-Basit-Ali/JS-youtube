// Primitive

// 7types: String, Number, Boolean, null, undefined, Symbol, BigInt

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 123120007099375987239847n;
console.log(id);
console.log(anotherId);
console.log(id === anotherId);
console.log(typeof bigNumber);


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Kashif", "Liaquat", "Farrukh"]

let myObj = {
    name: "Farrukh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);