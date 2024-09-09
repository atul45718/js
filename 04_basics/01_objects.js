// singleton
 Object.create //ways to create yhe object for constracter method 

// object literals
const  mySym = Symbol("key1")


 const jsUser={
     name: "Atul",
     "full nmae": "Atul kumar",
     [mySym]: "mykey1",
     age: 18,
     email: "atul@gmail.com",
     location: "Noida",
     isLoggedIn: false,
     lastLoginDays: ["momday","Saturday"]
 }
//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full nmae"]);
//  console.log(jsUser[mySym]);
 
 jsUser.email = "Atul@CHATGTP.COM"
//  Object.freeze(jsUser)
 jsUser.email = "Atul@microsoft.com"
 console.log(jsUser);
 

 jsUser.greeting = function(){
    console.log("Hello Js User");
    
 }
 jsUser.greetingTwo = function(){
    console.log(`Hello Js User ,${this.name}`);
    
 }
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());

 