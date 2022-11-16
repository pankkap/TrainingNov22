// // Function in JavaScript
// // Function Defination: Task
// // Function Calling: Call

// // Function Defination 
// function myFunction()
// {
//     console.log("This is a Very Simple Function");
// }

// // Function Calling 
// myFunction();

// function myFunction1 (x,y)
// {
//     console.log("Another Variation of Function ", x, y);
// }

// myFunction1(10,20)

// // Function will return something
// function myFunction2(x,y)
// {
//     return {a:x, b:y, c:0, d:1};
// }

// var obj = myFunction2(11,20);

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.d);


function sum(a, b)
{
    return a+b
}


function avg(a,b, x)
{
    return x(a,b)/2;
}
// Function Currying
console.log( avg(5,10, sum));


