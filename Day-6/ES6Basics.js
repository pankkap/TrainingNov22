// ES5 Version
// ES6 Version : Modern JavaScript 2015

// let vs var vs const

// a = 10;
// var a = 10;  // Global Scope

{
    var a = 10;
    console.log(a);   
}

console.log(a);   

// There is no Block scope in ES5


{
    let b = 20      // Block scope
    console.log(b);
}

// console.log(b);

{
const c = 10;
console.log(c);
}
// console.log(c);



// Arrow Functions

let fun = ()=> console.log(object);
let fun1 = (a) => a+a;
// function fun2(a)
// {
//     return a+a
// }

array.forEach(element => {
    
});

array.map(()=>{});