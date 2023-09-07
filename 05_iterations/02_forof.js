// For of
 
// 1. Array
const arr=[1,2,3,4,5,6]
for (const index of arr) {
    // console.log(index);
}

// 2. String
const name="Shubham Jangir"
for (const index of name) {
    // console.log(index);
}

for (const index of name) {
    if(index==' ')
        break
    // console.log(index);     // Many mor operations
}

// 3. map
const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("AU","Australia")
map.set("UAE","Unite Aran of Emirates")
map.set("EN","England")
map.set("IN","India")           // only unique value

// console.log(map);
for (const key of map) {
    // console.log(key);           // key = [ 'IN', 'India' ]
}
for (const [key , value] of map) {
    // console.log(`${key} is short form of ${value}`);
}

// 4. object
const obj ={
    'phone' : 'iPhone',
    'sim' : 'Vi'
}
// console.log(obj);
for (const key of obj) {
    // obj is not iterable
    console.log(key);
}