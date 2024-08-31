// String is object it is use to reperesents and manipulates the sequences of  the characters.
// it's can be written by three ways 1-single quotes (''), 2-double quotes (""), 3-backsticks (``)
// it can be useful to holding the data that can be repersented in text form .
 const str1 = "A String is primitive "
 const str2 = 'It will also primitive'
 const str3 = `yet another string primitive` // also know as template string 

//  console.log(typeof str1); //string
//  console.log(typeof str2);//string
//  console.log(typeof str3);//string
 

 // one more ways written string  call new keyword - str4 = new string() but it will be objects types 

 const str4 = new String("Welcome to javascript")

 //console.log(typeof str4);//object
 
 // string lenth - to find the length of string .it is use to be length property.

let  newString = "Vikings"
//console.log(newString.length);

// String Methods-22

// 1- String.property.lenght (.lenght)

let str="JavaScript is a Great is Language";
console.log(str.length);



// 2- toLowerCase() and toUperCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 3- includes() :-search to determine whether a given string may be 
// found within this string, returning true or false as appropriate.
console.log(str.includes("great")); // Flase
console.log(str.includes("Great")); // True
console.log(str.includes("eAt")); //false  bcz is seaarch always same it is case senstive

// starWith() and endWith() :-The startsWith() method of String values determines whether this string
// begins with the characters of a specified string, returning true or false as appropriate.
 console.log(str.startsWith("Java")); //true bcz string start with Java word 
 console.log(str.endsWith("ge")); // true bcz end with ge word
 console.log(str.endsWith(2,"L"));//flase bcz not end with 2 or L word so it will gives flase 
 
 // search() :-The search() method of String values executes a search for a match between a 
//  regular expression and this string, returning the index of the first match in the string.
 console.log(str.search("is")); // it return the index value of this word -11 index word is 
 console.log(str.search("abc")); // any condition not serach in string then it return -1 value.

 // match():- match function are use to search the str and it collected in  arr.
 console.log(str.match(/is/g)); //[is,is]-array

 // indexOf():- it will return the index value of the word at string end of string  if it is not found then retun -1 value
// lastIndexOf:- it will return the index value form the last side of string
 console.log(str.indexOf("is"));//11
 console.log(str.lastIndexOf("is")); //23
 
let items= " Mind , Power , Solu"

// replace():-The replace() method replaces a specified value with another value in a string
 let part=items.replace("Powe","Space");
 console.log(part); // it mean replace() method is returns a new string.
 console.log(items);//The replace() method does not change the string it is called on.
//============
 let learn="JavaScript is Best Languages in  is words" ;
 console.log(learn.replace("JavaScript", "PhP"));
 console.log(learn.replace(/is/g,"are"));
 
 //trim() :- The trim() method removes whitespace from both sides of a string: (trimStar(), trimEnd())
 let Language="   JavaScript   ";
//  let a=Language.trim()
let a=Language.trimStart()
let b=Language.trimEnd()
 console.log(a);
 console.log(a.length)
 console.log(b.length);
 
// CharAt() :- The charAt() method returns the character at a specified index (position) in a string
let text = "HELLO WORLD"
let char= text.charAt(3);
console.log(char);

// CharCodeAt():-method returns the code of the character at a specified index in a string
 let char2=text.charCodeAt(1)// it return ascii Code of char.H bcz H index Value 1
 console.log(char2);//H- Ascii code is -69
 //formCharCode:- it return the ascii code of any char.
 let c= String.fromCharCode(34);

// Concat() :- concat() joins two or more strings:
let tetx1="Hello"
let text2="World"
let text3="Name"
console.log(tetx1.concat( " ",text2 ," ", text3));

// split();-A string can be converted to an array with the split() method
console.log(str.split());
console.log(str.split("i"));// it split the string at chart i any to retun the array
//repeat():-The repeat() method returns a string with a number of copies of a string and return new string 
let rtext=tetx1.repeat(5);
console.log(rtext);

// slice():-slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included)
let sliceText="javascript is the world best languages";
console.log(sliceText.slice(0,4));// start position index is-0 ,  end position-4

// substr() and substring():-similary like slice method but 
// tosrting();- to return t he string any value
//valueOf():- to retuurn the value of the string 
// padStart():It pads a string with another string (multiple times) until it reaches a given leng
let strText="5";
let padded = strText.padStart(4,"x")
console.log(padded);
// padtEnd():- similar to padEnd()  but it return the multiple value last of the string or number
 console.log(strText.padEnd(10, "x"));
 