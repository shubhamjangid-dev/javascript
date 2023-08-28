// Immediately Invoked Function Expressions (IIFE)
// called when it is defined

//use due to the global pollution and 

(chai = function(){
    console.log("DB is CONNECTED SUCCESSFULLY ONE");
})();   //always use ";" after every iife

(function code(){
    // named iife
    console.log("DB is CONNECTED SUCCESSFULLY TWO");
})();

(() => {
    console.log("DB is CONNECTED SUCCESSFULLY THREE");
})();

