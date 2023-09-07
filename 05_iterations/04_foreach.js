const states =["Rajasthan","Gujarat","Kerala","Punjab","Maharastra","Madhya Pradesh"]

states.forEach( function (item) {
    // console.log(item);
})

states.forEach( (item) => {
    // console.log(item);
})

function printMe (item){
    // console.log(item);
}
states.forEach(printMe)

states.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
})

const language =[
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
]
language.forEach( (item) => {
    // console.log(item.languageName);
})
