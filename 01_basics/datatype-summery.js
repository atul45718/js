// primitive datatypes

// 7 types : String,number ,Boolean , null ,Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

//const id = symbol('123')
//const anotherId = symbol('123')
//const scoreId=symbol(123)
//console.log(id===anotherId);




// Reference type (Non primitive)

// Array , Objects, Functions

const  heros=["Shaktiman", "naagraj", "doga"]


let myObj = {
    name: "Atul",
    age :22,
}

const myFunction = function(){
    console.log("Hello world");
    
}
console.log( typeof outsideTemp);
console.log( typeof myFunction);
console.log( typeof anotherId);

const value=Symbol(123)
console.log( typeof value);

// The typeof operator check below link

//https://262.ecma-international.org/5.1/#sec-11.4.3
 
