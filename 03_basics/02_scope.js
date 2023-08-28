var a = 600
 
let c =500
if(true)
{
    var a = 10
    const b = 20
    let c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

//   Scope  in  Function

function one(){
    const username = "Shubham"
    function two(){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);      // not in scope 
    two()
}
// one()


if(true){
    const username = "Shubham"
    if(username === "Shubham"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);          // not in scope
}
// console.log(username);            // not  in scope

//  *************   Interesting   ************

// console.log(addOne(5));        // can be executed before function declaration

function addOne(num){
    return num + 1
}

// console.log(addTwo(6));           // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(8));