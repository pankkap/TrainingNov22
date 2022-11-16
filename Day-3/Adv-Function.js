// Function using constructor
let myFunction = new Function(
  "a",
  "b",
  "console.log('this is constructor function'); return a+b"
);
console.log(typeof myFunction);

console.log(myFunction(5, 10));

// Function Expression
let myFunction1 = function () {
  console.log("This  is Expresion Function");
};
myFunction1();

// Self-invoking Function
(function () {
  console.log("This is Self Invoking function");
})();

// ES6 Function Syntax

let function3 = () => console.log("This is Arraow Function ");
function3();

let function4 = (a) => a * a;
console.log(function4(5));

//  foreach vs Map Function
var arr = [1, 2, 3, 4, 5];
// var newArr = arr.forEach((i)=>i*10)
var newArr = arr.map((i) => i * 10);
console.log(newArr);

var users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

// Expected Output:
["Susan Steward", "Danial Longbottom", "Jacob Black"];

//   1. Normal Approch
var output2 = [];
for (let i = 0; i < users.length; i++) {
  output2.push(users[i].firstName + " " + users[i].lastName);
}
console.log(output2);

//   2. Using Map Method
var output1 = users.map((x) => {
  return x.firstName + " " + x.lastName;
});
console.log(output1);

// Filter Method
var ages = [32, 33, 25, 17, 22];

var result = ages.filter(function (age) {
  return age > 18;
}).sort((a,b)=>a-b);
console.log(result);


let cities = [
    { name: "Delhi", population: 3792621 },
    { name: "Mumbai", population: 8175133 },
    { name: "Kolkata", population: 2695598 },
    { name: "Hyderabad", population: 2099451 },
    { name: "Bangalore", population: 1526006 },
  ];

// Task-1: You have to filter out the data having popution greater than 30000000
// Task-2: SOrt the data by Popution in Descending Order