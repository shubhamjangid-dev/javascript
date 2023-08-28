const user = {
    username : "shubham",
    id : "A101",

    welcomeMessage : function(){
        console.log(`Hii ${this.username}, Welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="Hanuman"
// user.welcomeMessage()
// console.log(this);   // empty instance  o/p {}

//  Same  with  functions

function one(){
    let name = "Shubham Jangir"
    console.log(this.name);         // undefined
    console.log(this);  //global
}
// one()

const two = function(){
    let name = "Shubham Jangir"
    console.log(this.name);         // undefined
    console.log(this);  //global
}
// two()

// Arrow function 
const three = () =>{
    let name = "Shubham Jangir"
    console.log(this.name);         // undefined
    console.log(this);         // empty
}
// three()

// arrow function formats 

// const addTwo = (num1, num2) =>{                   // normal 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2           // no need of return

// const addTwo = (num1, num2) =>(num1 + num2)          // can also use parenthisis () or round bracket ()

//  **IMP  if braces {} are used then you have to use return

const addTwo = (num1, num2) =>({username : "Shubham"})
// console.log(addTwo(12, 15));