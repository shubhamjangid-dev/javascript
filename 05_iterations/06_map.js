const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myNewNums = myNums.map( (num) => num+1)
// const myNewNums = myNums.map( (num) => num*10+num)

// const myNewNums = myNums.map( (num) => num*10).map( (num) => num-5)             
const myNewNums = myNums.map( (num) => num*10).map( (num) => num-5).filter( (num) => num%3==0)       

console.log(myNewNums);