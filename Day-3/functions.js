// // Function in JavaScript
// // Function Defination: Task
// // Function Calling: Call

// Function Defination 
function myFunction()
{
    console.log("This is a Very Simple Function");
}

// Function Calling 
myFunction();

function myFunction1 (x,y)
{
    console.log("Another Variation of Function ", x, y);
}

myFunction1(10,20)

// Function will return something
function myFunction2(x,y)
{
    return {a:x, b:y, c:0, d:1};
}

var obj = myFunction2(11,20);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);


// Passing function as argument
function add(a, b) {
    return a + b;
  }
    var sum = add;
  // Reference of add() is also stored in sum
  // so we call the function using add() as well sum()
  
function avg(a, b, x) {
    return x(a, b) / 2;
  }
  
  var result = avg(5, 10, sum);
  console.log("Final Result= " + result);


// Function Currying
console.log( avg(5,10, sum));

// Function Currying
function calculateVolume(length) {
    return function (breadth) {
       return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));
