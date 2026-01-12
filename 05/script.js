// Logical Operators
// AND (&&) -> all conditions must be true

const age = 20;
const gender = 'male';

if(age >= 18 && gender == 'male') {
    console.log("You are an adult male");
}

// OR (||) -> atleast one condition must be true
if(age >= 18 || gender == 'female') {
    console.log("yes")
}


// NOT (!) -> negation of condition