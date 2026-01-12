// Higher order functions and Callback
// cb - callback
function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

// HOF
// add(2, 4, function(val) {
//     console.log(val);
// });

add(2, 4, val => console.log(val));

