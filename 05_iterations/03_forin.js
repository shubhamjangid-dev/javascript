// 1. Object
const obj ={
    'phone' : 'iPhone',
    'sim' : 'Vi'
}
// console.log(obj);
for (const key in obj) {
    // console.log(key); // only key
    // console.log(`${key} ====>>>> ${obj[key]}`);
}

// 2. Array
const arr =["c","c++","java","javascript"]
for (const index in arr) {
    // console.log(index);    // only key  (0 1 2 3)
    // console.log(arr[index]);
}

// 3. Map
const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("AU","Australia")
map.set("UAE","Unite Aran of Emirates")
map.set("EN","England")
map.set("IN","India")           // only unique value

for (const key in map) {
    // console.log(key);  // no output
}