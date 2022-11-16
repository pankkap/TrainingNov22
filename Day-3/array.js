// JavaScript Array
// 1. Using Litral Array
// 2. Using constructor Array

var stringArr = ["abc", "xyz", "pqr"];
var numberArr = [1, 2, 3, 4, 5];
var decimalArr = [1.1, 1.2, 1.3];
var mixArr = ["pankaj", 25000, true, 1.5];
console.log(mixArr);

// access individual element by their index value
console.log(mixArr[1]);

let mixDSArr = [
  { task1: "Assignment" }, //object
  [11, 22, 33], // Array of Arrays
  function sayHi() {
    return "Hello ";
  },
  2022,
];

mixDSArr[0].task1 = "Assignment-2";
console.log(mixDSArr);
console.log((mixDSArr[1][2] = 125));
console.log(mixDSArr[2]());

// Traverse the Array using Loop
for (let i = 0; i < mixDSArr.length; i++) console.log(mixDSArr[i]);

for (let i of mixArr) console.log(i);

// Array Method to insert and delete elements

numberArr.push(55);
console.log(numberArr);
numberArr.unshift(101);
console.log(numberArr);

numberArr.pop();
numberArr.shift();
console.log(numberArr);

// Splice which is used to insert and remove elements in the array at any position

// Add elements using splice
numberArr.splice(2, 0, 10, 20);
console.log(numberArr);

// Remove elements using splice
numberArr.splice(1, 2);
console.log(numberArr);

var training = [
  "Ankur",
  "Shilpi",
  "Nandan",
  "Pankaj",
  "Siddharth",
  "Shambhavi",
];

// training.forEach(myFunction)
// function myFunction(element){
//     console.log( "Hi "+ element)
// }

training.forEach((i) => console.log("Hello " + i));


// Multi-Dimensional

var team = [
    ["HR", 1],
    ["Developer", 2],
    ["Testing", 3],
    ["Game Artist", 4]
]

team.forEach((i)=>console.log("Team:  "+i[0] + " Situated at: " + i[1] + " Floor"))