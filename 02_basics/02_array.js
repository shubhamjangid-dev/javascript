const marvel_heros = ["Thor","Spiderman","Ironman"]
const indian_heros = ["Hanuman","Ram","Laxman"]

// marvel_heros.push(indian_heros)  //nested array
// console.log(marvel_heros);           // [ 'Thor', 'Spiderman', 'Ironman', [ 'Hanuman', 'Ram', 'Laxman' ] ]
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(indian_heros)
// console.log(all_heros);        // [ 'Thor', 'Spiderman', 'Ironman', 'Hanuman', 'Ram', 'Laxman' ]

const all_new_heros = [...marvel_heros,...indian_heros]
// console.log(all_new_heros);

// solve nested array
const array = [1,2,3,[4,5],6,[7,[8,9],[10,11]]]

const new_array =array.flat(Infinity) 
// console.log(new_array);

// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham"));
// console.log(Array.from({name : "shubahm",
// surname : "jangir"}));

const a=100
const b=200
const c=300
// console.log(Array(a,b,c));