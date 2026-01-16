function add(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

// function addAndSquare(a, b) {
//   return square(add(a, b));
// }

function composeTwoFunctions(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

console.log(composeTwoFunctions(add, square)(2, 4));
console.log(c2f(add, square)(2, 4));

function multiply(args) {
  return args[0] * args[1];
}

// unlimited number of compositions
function compose(...fns) {
  return function (...values) {
    return fns.reduceRight((a, b) => b(a), values);
  };
}

const task = compose(square, multiply);
console.log(task(2, 3));

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);
