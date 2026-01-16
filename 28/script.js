// Iterators

// for (const val of [1, 2, 3, 4, 5]) {
//   console.log(val);
// }
//
// function makeIterator(start = 0, end = Infinity, step = 1) {
//   let nextStart = start;
//   let iterationCount = 0;
//
//   return {
//     next() {
//       let result;
//       if (iterationCount < end) {
//         result = { value: nextStart, done: false };
//         nextStart += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };
// }
//
// const myIterator = makeIterator(1, 10, 1);
// let result = myIterator.next;
//
// // can't be used on for loop
// while(!result.done) {
//     console.log(result.value);
//     result = myIterator.next();
// }

// Generator function
function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 10;
  yield 12;
}

// const even = count();
// for(const v of even) {
//     console.log(v);
// }

function* makeMyIteratorNew(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const one = makeMyIteratorNew(1, 20, 2);
for (const v of one) {
  console.log(v);
}
