// function add(a, b, c) {
//     return a + b + c;
// }
//
// console.log(add(2, 5, 10));

// Currying
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
//
// console.log(add(2)(5)(10));
//
// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(
//         "Sending Email to " + to + " subject " + subject + " body " + body
//       );
//     };
//   };
// }
//
// let step1 = sendAutoEmail("junejagourav2006@gmail.com");
// let step2 = step1("New Order Confirmation");
// let result = step2("Hey, Gourav. Here is Something for you");
// console.log(result);

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));
