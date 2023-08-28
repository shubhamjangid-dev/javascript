// functions

// basic function

// function sayMyName(){
//     console.log("s");
//     console.log("j");
// }
// sayMyName()
function add(number1 ,number2){
    console.log(number1+number2);
}
// add(4,7)
// const result =add(5,4)
// console.log(result);  // undefined

function addTwo(number1 ,number2){
    // let result = number1+number2
    // return result                // nothing con be executed after return
    return number1+number2
}
const result =addTwo(5,4)
// console.log(result); 

function loginUserMessage(username){
    if(username){
        return `${username} just logged in`
    }
    else{
        return "Enter a username"
    }
}
//console.log(loginUserMessage("Shubham"));       
//console.log(loginUserMessage(""));


function calculateCartValue(...num1){           // rest ...
    return num1              // creates array o/p [ 100, 200, 5000, 1000 ]
}
// console.log(calculateCartValue(100, 200, 5000, 1000));

//object as parameter 
const productDetail ={
    productName : "iPhone 13",
    price : 59999
}
function handelObject(anyObject){
    return `Product Name ${anyObject.productName} and its Price ${anyObject.price}`
}
// console.log(handelObject(productDetail));

// console.log(handelObject({
//     productName : "macbook air M2",
//     price : 114900
// }));


// Array as parameter
const arr =[100, 200, 600, 9900]

function arrayInfo(array){
    console.log(`length of array : ${array.length}`);  
    console.log(`2nd element : ${array[1]}`);  
}
// arrayInfo(arr)
arrayInfo([1, 50, 39, 75, 55])
