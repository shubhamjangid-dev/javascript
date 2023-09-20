# Project Related to DOM
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)
## project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    // console.log(e);    // event listener
    // console.log(e.target);    // print element
    // console.log(e.target.id);  // gives color
    body.style.backgroundColor=e.target.id; 
  })
})
```
## Project 2
```javascript
const form = document.querySelector('form')
const result = document.querySelector('#results')
form.addEventListener("submit",function(e){
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  // console.log(height);
  // console.log(weight);
  if(height<0 || height ==""|| isNaN(height))
  {
    result.innerText ="Enter Valid Height";
  }
  else if(weight<0 || weight ==""|| isNaN(weight))
  {
    result.innerText ="Enter Valid Weight";
  }
  else
  {
    const bmi =(weight/((height*height)/10000)).toFixed(2);
    let status;
    if(bmi<18.6)
      status="Under Weight";
    else if(bmi<24.9)
      status=" in Normal Range";
    else
      status="Over Weight";
    result.innerHTML = `Bmi = ${bmi}<br> You are ${status}`;
  }
})
```

## Project 3
```javascript
const clock = document.querySelector('#clock');
// const date = new Date();
// // console.log(date.toLocaleTimeString())
// clock.innerHTML = date.toLocaleTimeString()
setInterval(function(){
  const date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Project 4 first try
```javascript
const submit = document.getElementById('subt');
const lowOrHigh = document.querySelector('.lowOrHi');
const previousGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
// console.log(remainingGuesses.innerHTML);
let randomNO = Math.floor(Math.random()*100+1);
console.log(randomNO);
let guesses =0;
let arr=[]
submit.addEventListener("click",function(e){
  e.preventDefault();
  let num = takeInput();
  // console.log(randomNO , input);
  
  if(num==randomNO)
  {
    lowOrHigh.innerHTML = `you win, you guess the number`
    setTimeout(reset,5000);
  }
  else if(guesses==10)
  {
    lowOrHigh.innerHTML = `you lose, Random No is ${randomNO}`
    setTimeout(reset,5000);
  }
  else if((num>randomNO&&num-20<randomNO)||(num<randomNO&&num+20>randomNO))
  {
    lowOrHigh.innerHTML =`you are close` 
  }
  else if(num<randomNO)
  {
    lowOrHigh.innerHTML =`you are too low` 
  }
  else if(num>randomNO)
  {
    lowOrHigh.innerHTML =`you are too high` 
  }
})

function takeInput(){
  const input = parseInt(document.getElementById('guessField').value);
  if(input>0 && input<=100)
  {
    guesses++;
    remainingGuesses.innerText=`${10-guesses}`
    arr.push(input);
    printArr();
    return input;
  }
  else
  {
    lowOrHigh.innerHTML = `Enter a valid Number`;
    return 0 ;
  }
}
function reset(){
  guesses=0;
  lowOrHigh.innerHTML = ``
  remainingGuesses.innerText=`10`
  previousGuesses.innerText=``
  randomNO = Math.floor(Math.random()*100+1);
  console.log(randomNO);
}
function printArr(){
    let text =previousGuesses.innerText;
    previousGuesses.innerText = `${text}${arr[guesses-1]},`;
}

```