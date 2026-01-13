console.log("Testing...")

// Variables
// var

var age = 20;
var num1 = 22;
var num2 = 25;


// Var -> Global
if(true) {
    var age = 23;
}

console.log(age); // Global scope


console.log(age); // undefined
var age = 20; 


// let (local scope)
let age = 20;
console.log(age);


// local 
if(true) {
    let a = 20;
}

console.log(a); // not defined


// const (local scope) -> value can't be re assigned
const age = 20;
console.log(age);
