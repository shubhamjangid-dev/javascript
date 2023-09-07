let userEmail = []
if (userEmail) {
    // console.log("have value");
} else {
    // console.log("Empty Value");
}

// Falsy Value
// false, 0 , -0, Bigint 0n, "", null, undefined, NaN
// Truthy Value
// true, 1, "something", "0", [], {}, function(){}

if (userEmail.length === 0) {
    // console.log("Array is Empty");
}

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined
let sourceA=100
// val1 = 10 ?? 20  // 10
// val1 = sourceA ?? 20  // if sourceA has null or undefines then 20
// val1 = null ?? undefined ?? sourceA
// console.log(val1);

// Terniary Operator
// condition ? true part : false part
100>500? console.log("true part"):console.log("false part");