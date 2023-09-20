// console.log(window);
// console.log(window.document);// 
// console.log(document);//both same , <!DOCTYPE html>
// console.dir(document);

document.getElementById('h1div')
document.getElementById('h1div').id
document.getElementById('h1div').className
document.getElementById('h1div').getAttribute('id')
document.getElementById('h1div').getAttribute('class')
document.getElementById('h1div').setAttribute('class','test') // over write className
document.getElementById('h1div').setAttribute('class','previousName test') // over write className
// link 
h1div.links             // all links 
h1div.links[2]
h1div.linkColor = "pink"
// style 
h1div.style.backgroundcolor = 'green'

document.getElementById('h1div').textContent
document.getElementById('h1div').textContent = "Pink City"
document.getElementById('h1div').innerHTML = "<h1>ShubhamJangir </h1>"

// query selector

document.querySelector('ul')
//    O/P   <ul>​…​</ul>​
const myul = document.querySelector('ul')
//    O/P   undefined
myul.querySelector('li')
//    O/P   <li>​…​</li>​
const myli = myul.querySelector('li')
//    O/P   undefined
myli
//    O/P   <li>​…​</li>​
myli.style.backgroundColor="pink"
//    O/P   'pink'
myli.style.color="green"
//    O/P   'green'

// query Selector All


document.querySelectorAll('li')
//    O/P   NodeList(5) [li, li, li, li, li]
const tempLiList = document.querySelectorAll('li')
//    O/P   undefined
tempLiList
//    O/P   NodeList(5) [li, li, li, li, li]
tempLiList.style.backgroundColor = "gray"
//    O/P   Uncaught TypeError
tempLiList[1].style.backgroundColor = "gray"
//    O/P   'gray'
tempLiList.forEach( (item) => item.style.backgroundColor = "gray")
//    O/P   undefined
tempLiList.forEach( (item) => item.style.padding = "10px")
//    O/P   undefined
tempLiList.forEach( (item) => item.style.width = "50px")
//    O/P   undefined
tempLiList.forEach( (item) => item.style.borderRadius = "15px")
//    O/P   undefined
tempLiList.forEach( (item) => item.style.paddingLeft = "25px")
//    O/P   undefined


document.getElementsByClassName('')
//    O/P   HTMLCollection []
document.getElementsByClassName('list-item')
//    O/P   HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]
//    forEach in not in HTMLCollection prototype

const tempClassList=document.getElementsByClassName('list-item')
//    O/P   undefined
tempClassList
//    O/P   HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)            // converted to array to use forEach
//    O/P   (5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]
const MyConvertedArray=Array.from(tempClassList)
//    O/P   undefined
MyConvertedArray
//    O/P   (5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]
MyConvertedArray.forEach((li) => li.style.color = "coral")
//    O/P   undefined

//

document.querySelectorAll('h3')
//    O/P   NodeList(16) [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3]
const allH3 = document.querySelectorAll('h3')
//    O/P   undefined
allH3[1].innerText
//    O/P   'Climate'
allH3.forEach((item)=>{
    item.style.color ="coral"
    item.style.backgroundColor ="Moccasin"
    item.style.paddingLeft="15px"
    item.style.borderRadius="8px"
})
//    O/P   undefined 