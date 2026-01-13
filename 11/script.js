const students = ["Alice", "Bob", "Casey"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

students.forEach((val) => console.log(val));

const numbers = [1, 2, 3, 4, 5, 6]
function double(n) {return n * 2;}
let newArr = numbers.map(double);
console.log(newArr);