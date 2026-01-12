// Functions

function sayHello() {
  console.log("Hello Gourav, Last Dance");
}

sayHello();
sayHello();
sayHello();

// arguments
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // parameters

// function add(...args) {
//     sum = 0;
//     args.forEach(arg => {
//         sum += arg;
//     });
//     return sum;
// }

function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) ans += arguments[i];
  return ans;
}

console.log(addNumbers(1, 2, 5));


// ...args -> spread operator