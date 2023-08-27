// singlton 
//object.creat
const mysym = Symbol("key1")
//object literals
const user = {
    name :"Shubham",
    surname :"Jangir",
    "fullName" :"Shubham Jangir",
    [mysym] : "mykey1",
    age : 20,
    place :"Laxmangarh",
    loggedIn : false
}
// console.log(user.name);    
//better way

// console.log(user["name"]);
// console.log(user["fullName"]);
// console.log(user[mysym]);

user.place ="rajasthan"
// Object.freeze(user)  // nochange after this
user.place ="sikar"
// console.log(user);

//function

user.greating = function(){
    console.log("hello user");
}
user.greatingtwo = function(){
    console.log(`hello ${this.fullName}`);
}

console.log(user.greating());
console.log(user.greatingtwo());