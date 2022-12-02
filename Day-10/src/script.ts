let character = "pokimon"
console.log(typeof(character));
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input=>{
    console.log(input);
})


let fname:string; 
// Declaration

// Variable initialization
fname = "434"

// fname = 35
let age = 35
// age = "35"
let isWFH = false
// isWFH = "true"


function circle(diameter:number)
{
    return diameter * Math.PI
}

console.log(circle(5));