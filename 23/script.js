// function main() {
//   const name = "Gourav Juneja";
//   function sayMyName() {
//     console.log(name);
//   }
//   return sayMyName;
// }
// 
// 
// let fn = main();
// fn();
// 
// function adder(num) {
//     function add(b) {
//         console.log(num + b);
//     }
//     return add;
// }
// 
// const addTo5 = adder(5);
// addTo5(2);

const myName = document.getElementById("my-name");

function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }
}

const size12 = makeTextSizer(12);
const size52 = makeTextSizer(52);
const size20 = makeTextSizer(20);
const size5 = makeTextSizer(5);


