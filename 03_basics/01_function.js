


function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("U");
     console.log("L");
}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2); // value is undefined
    
// }


function addTwoNumber(number1,number2){
    // let result = number1 + number2 
    // return result 
    return number1 + number2
    
    
}
let result=addTwoNumber(3 , 5);
// console.log("Result :" , result);


function loginUserMessage(username ="sam"){
    //   if(username===undefined) or
          if(!username)      {
        console.log("Please enter a username");
        return
        
      }
      return `${username} just logged in`  
}
// console.log(loginUserMessage("atul"));
// console.log(loginUserMessage());

// rest operater (...):-rest operater to use pass the multiple value as argument then use rest operter in parameter
function calculateCartPrice( val1 , val2 , ...num1){
     return num1
}
// console.log(calculateCartPrice(200 , 400 ,500 ,6000));

const user ={
  username:"atul",
  price:199
}
function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);

}
// handleObject(user)
// handleObject({
//   username: "sam",
//   price : 299
// })


const myNewArray = [200, 400, 100 , 600]
function returnSecondValue(getArray){
   return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 4000 , 5000 , 600 ]));
 
