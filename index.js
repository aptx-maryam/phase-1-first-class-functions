
// Callback function

function callback(){
    console.log (`Hey there, I'm a callback function`)
};

 function receivesAFunction(callback) {
    callback();
 }
 receivesAFunction(callback())


// Return a named function

 function returnsANamedFunction(){
    return (function namedFun (){
    console.log("Hi, I'm a named function!")
 })
 }
returnsANamedFunction()


// Return an anonymous function

function returnsAnAnonymousFunction(){
    return (()=>{
        console.log("Hello, I'm an anonymous function!")
    })
}
returnsAnAnonymousFunction()