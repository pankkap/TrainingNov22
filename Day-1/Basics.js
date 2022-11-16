// ECMAScript vs JavaScript ?
// ES5 Before 2015
// 2015--> ES6 feature of JavaScript

// backward compatibiltiy is There in every version 
// forward compatibiltiy is not There in every version, need to update the browser

// Signle Line Comment

/* Multiline
Comment */


// Variable

// "use strict";
// var firstName = "Pankaj"
// var lastName = "Kapoor"
// console.log(firstName);
// console.log(lastName);


// JavaScript worked in two Modes
// 1. Strict Mode
// 2. Sloppy Mode




// function sayHello(x)
// {
//     if(true)
//     {
//         return "Hello" + x
//     }
// }


// console.log( sayHello(123));



// Data types

// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. object


// var ES5 syntax for creating a variable  function scope
// let ES6 syntax for creating a variable  block scope

var name = "Pankaj";
var fname = 'Sachin'
var address = `I am from Yamuna nagar
Its a twin city
Its in Haryana
I born there
`

console.log("My name is " + name + " and my friend name is " + fname);

console.log(`My name is ${name} and my friend name is ${fname}`);

console.log(address);


var age = 35;
var salary = 100000.23;
console.log(typeof (age));
console.log(typeof (address));

var isActive = true
console.log(typeof (isActive));


var x;
console.log(typeof(x));

var y = null;
console.log(y);
console.log(typeof(y));


var i= BigInt(4897434759349757394757983475934757347573759n);

console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof(i));


// variable declaration Rules

var _fistname = "pankaj";
console.log(_fistname);

var firstName = "pankaj";  // camelCase
var last_name = "Kapoor"    // snake_Case
const PI=3.12;

