// create promice
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async Task Completed");
        resolve(); // resolve hoga to hi promice consumed hoga
    }, 1000)
})
promiseOne.then(function(){
    // console.log("Promise consumed");
})

// promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Asycn task 2 Completed");
    },1000)
    resolve();
}).then(function(){
    // console.log("Promise 2 Consumed");
})

// promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Shubhamjangir", email:"example@gmail.com"}) 
    }, 1000);
})
promiseThree.then(function(user){
    // console.log(user);          // { username: 'Shubhamjangir', email: 'example@gmail.com' }
    // console.log(typeof user);   // object
    // console.log(user.username); // Shubhamjangir
    // console.log(user.email);    // example@gmail.com
})

// promise 4
const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    if(error)
    {
        reject("Something went wrong !")
    }
    else
        resolve({username : "Shubham", email:"example@gmail.com"});
})

promiseFour.then((user)=>{
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("kuch to hua h");
})


// promise 5
const promiseFive = new Promise(function(resolve, reject){
    let error = true;
    if(error)
    {
        reject("JS went wrong !")
    }
    else
        resolve({username : "Shubham@123", password:"12345678"});
})

async function consumePromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// fetch 
// asycn await
// async function userData(){
//     try {
//         const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
//         console.log(responce);
//         console.log(typeof responce);
//         // const data = responce.json(); // json hone me time lgta h O/P => Promise { <pending> }
//         const data = await responce.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } 
// userData();

// then
fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce)=>{
    // console.log(responce.json());
    return responce.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})