// Dates


let myDate = new Date()
// console.log(myDate.toString());  // Thu Sep 05 2024 04:24:15 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu Sep 05 2024
// console.log(myDate.toISOString()); //2024-09-05T04:26:25.882Z
// console.log(myDate.toLocaleDateString());  // 9/5/2024
// console.log(myDate.toLocaleString());   // 9/5/2024, 4:29:13 AM
// console.log(myDate.toLocaleTimeString());  // 4:30:07 AM

// console.log(myDate.toTimeString()); //04:31:16 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString());  // Thu, 05 Sep 2024 04:32:15 GMT
// console.log(myDate.getTimezoneOffset()); //0
//  console.log(myDate.getHours()); // 4
//  console.log(myDate.toLocaleString()); 
 console.log(typeof myDate);
 
//  method -1
//  let myCreatedDate = new Date(2023,0,23) //Mon Jan 23 2023
//  console.log(myCreatedDate.toDateString());

// method -2
// let myCreatedDate = new Date(2023,0,23 ,5 ,3)  //1/23/2023, 5:03:00 AM
// console.log(myCreatedDate.toLocaleString());
 
// method-3

// let myCreatedDate = new Date("2023-01-14") //1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

// method-4
let myCreatedDate = new Date("01-14-2023") // "DD-MM-YY" , time - HH-MM-SS
// console.log(myCreatedDate.toLocaleString());

// time  stamp 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// `${newDate.getFullYear()}and the time`

newDate.toLocaleString('default',{
    weekday:"long"
    
})
