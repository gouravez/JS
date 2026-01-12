// Arrow functions

// 1. Syntax
const sayHello = () => {
    console.log("Heyy, its your last Dance");
}

const add = (a, b) => {
    return a + b;
}

const addV2 = (a, b) => a + b; // Lambda functions

// 2. 'arguments' keyword (Not Available in Arrow function, only ...args)
const addNumbers = (...args) => {
    console.log(args)
}

// 3. Hoisting
sayHey();
function sayHey() {
    console.log("heyy");
}

// Hoisting doesn't work in Arrow functions


// 4. This Keyword
// const obj = {
//     value : 20, 
//     myFunction : function() {
//         console.log("Value is " + this.value) // 20
//     }
// }
// 
// obj.myFunction();

const obj = {
    value : 20, 
    myFunction : () => {
        console.log("Value is " + this.value) // undefined
        // this -> window object, scope of arrow function is global
        console.log(this)
    }
}

obj.myFunction();