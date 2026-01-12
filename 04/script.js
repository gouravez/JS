// if else
const age = 20;

if(age >= 18) {
    console.log("You can Vote")
} else {
    console.log("Can't Vote")
}


// Ternary Operator
(age >= 18 ? console.log("Yes") : console.log("No"))


// Switch Case
const option = 1;
switch(option) {
    case 1 : {
        console.log("Hello");
        break;
    }
    case 2 : {
        console.log("Bonjour");
        break;
    }
    case 3 : {
        console.log("Namaste");
        break;
    }
    default : {
        console.log("invalid choice");
    }
}