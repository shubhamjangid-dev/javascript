const temperature = 51

if (temperature <50){
    // console.log("Temperature is less than 50");
}
else
{
    // console.log("Temperature is greater than and equal to 50");
}

// all conditions
// >, <, >=, <=, ==, !=, ===, !==

// scope in if 

const score =200
if (score >= 100){
    const power = "fly"
    // console.log(`the power is : ${power}`);
}
// console.log(`the power outside if is : ${power}`);      // power not defined outside if

// in single line
const condition =true
// if(condition)console.log("first line"),console.log("second line");

// Nested ifelseif
// const balance =1000

// if (balance<500){
//     console.log("less than 500");
// }
// else if (balance<750){
//     console.log("between 500 and 750");
// }
// else if (balance<1000){
//     console.log("between 750 and 1000");
// }
// else if (balance<1200){
//     console.log("between 1000 and 1200");
// }

const userLoggedIn = true
const debitCard = false
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    // console.log("You can buy the cours");
}

if (loggedInFromEmail || loggedInFromGoogle){
    // console.log("Current session Active");
}