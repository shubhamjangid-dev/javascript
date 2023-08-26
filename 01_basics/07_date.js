//****** Date ******

const date = new Date();
// console.log(typeof date);   //object
// console.log(date.toDateString());           // Sat Aug 26 2023
// console.log(date.toISOString());            // 2023-08-26T12:47:19.981Z
// console.log(date.toJSON());                 // 2023-08-26T12:47:19.981Z
// console.log(date.toLocaleDateString());     // 8/26/2023
// console.log(date.toLocaleString());         // 8/26/2023, 12:47:19 PM
// console.log(date.toLocaleTimeString());     // 12:47:19 PM
// console.log(date.toString());               // Sat Aug 26 2023 12:47:19 GMT+0000 (Coordinated Universal Time)
// console.log(date.toTimeString());           // 12:47:19 GMT+0000 (Coordinated Universal Time)
// console.log(date.toUTCString());            // Sat, 26 Aug 2023 12:47:19 GMT

console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());


let currentDate = new Date(2023, 8, 15)         // Fri Sep 15 2023 00:00:00
//currentDate = new Date(2023, 8, 18, 5, 50)    // Mon Sep 18 2023 05:50:00
currentDate = new Date("09-15-2023") 

//console.log(currentDate.toString());


console.log(currentDate.toLocaleString('default', {
    weekday: "long",              // narrow-> F  ,short-> Fri ,long-> Friday 
}))
//console.log(date.toLocaleString());