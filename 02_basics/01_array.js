// array


const myArr = [0, 1, 2, 3, 4,5]
const myHeors = ["Shaktiman","naagraj"]
const myArr2 = new Array(1,2,3)
// console.log(myArr[1]);

// Array methods 

// myArr.push(6)
// myArr.pop()
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( typeof newArr);

// slice , splice (interviews Questions arise is to be Diff.between slice and splice => slice can change the copy array but splice can changes in orginal array)
/*
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2); */


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concat()method :- cobination of two or more methods and retuns always new array.

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// sperade operator :-https://www.freecodecamp.org/news/how-to-merge-arrays-in-javascript-array-concatenation-in-js/

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// flat() method :-The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// from() Method:- An iterable or array-like object to convert to an array.
console.log(Array.isArray("Atul"));
console.log(Array.from("Atul"));
console.log(Array.from({name:"atul"})); // insteresting :- for intervinterviews 

//Array.of() method :-The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. 
let score1= "atul"
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));
