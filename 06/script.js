// // Loops
// 
// // for -> exact number of iterations known
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// 
// 
// // while -> final condition known (not exact iterations)
// /*
// Gourav                              
//                                     House
// while
// */
// 
// let initialPosition = 0;
// let house = 100;
// while(house != initialPosition) {
//     initialPosition = initialPosition + 1;
//     console.log("step taken " + initialPosition);
// }


// do while
let number = 40;
let guess = 0;
do {
    guess = parseInt(prompt("Enter a number"));
    if(guess == number) {
        alert("You won");
        break;
    }
} while(guess != 0)