// IIFE - Immediately Invoked function Expression
let age;
(function add(a, b) {
  console.log(a + b);
})(2, 3);

(function say() {
  console.log("Hey");
})();

(() => console.log("I am ES6"))(

);

const value = (() => 100)();
console.log(value);