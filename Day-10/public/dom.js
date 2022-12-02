let heading = document.querySelector('h1');
let anchor = document.querySelector('a');
let input1 = document.getElementById('num1');
let input2 = document.getElementById('num1');
let form = document.querySelector('.myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let num1 = parseInt(input1.value);
    let num2 = Number(input2.value);
    console.log(num1, num2);
    let result = num1 + num2;
    console.log(result);
    let newp = document.createElement('p');
    newp.innerText = result;
    form.appendChild(newp);
});
console.log(form.children);
