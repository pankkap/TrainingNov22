// let greet = ()=>{
//     console.log("Hello WOrld");
// }

// greet = "abc"

// Explicit function declaration
// let greet:Function;

// greet = function(){
//     console.log("This is Function ");
// }

// greet();

// Optional argument 
// Default Arguments
// let add =(a:number, b:number, c?:string|number)=>{
let add =(a:number, b:number, c:string|number=25):void=>{
    console.log(a+b);
    console.log(c);
}
add(5,10)

let minus = (a:number, b:number):number=>{
    return a+b
}


// Function Signature
let sig1: (a:number)=>number;

// Function Defination 
sig1 =(data:number)=>{
    return data;
}
console.log(sig1(5));

let sig2:(a:number, b:string)=>void;
sig2 = (id, name)=>{
    console.log(`Id: ${id} and name ${name}`);
}




