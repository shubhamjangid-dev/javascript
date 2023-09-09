const myNums =[1,2,3,4]

const total = myNums.reduce( (acc,value) => (acc+value) , 0)
// console.log(total);
// how it works
const mytotal = myNums.reduce( (acc,value) => {
    // console.log(`Accumilator :${acc}, value :${value}`);
    return acc+value} , 0)

// Shopping cart
 const shoppingCart = [
    {
        productName : "iPhone 13",
        price : 59999
    },
    {
        productName : "iPhone 14",
        price : 79999
    },
    {
        productName : "macBook air M1",
        price : 82999
    },
    {
        productName : "macBook air M2",
        price : 114900
    }
 ]

 const priceToPay = shoppingCart.reduce( (sum , item) => sum+item.price,0)
 console.log(priceToPay);