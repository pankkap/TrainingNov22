let heading = document.querySelector('h1');
// Implicit Casting
let anchor = document.querySelector('a')
let input1 = document.getElementById('num1') as HTMLInputElement;
let input2 = document.getElementById('num1') as HTMLInputElement

let form = document.querySelector('.myForm') as HTMLFormElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    // console.log("form is going to submit");

    let num1:number = parseInt(input1.value);
    let num2:number = Number(input2.value);
    // let num2:number = input2.value as unknown as number;
    // let num2:number = <number><unknown>input1.value;

    console.log(num1, num2);    
    let result:number = num1 + num2
    console.log(result);
    let newp = document.createElement('p')
    newp.innerText = <string><unknown>result;
    form.appendChild(newp)
})

console.log(form.children);




// let aa:unknown = true;
// let data1:number = aa;