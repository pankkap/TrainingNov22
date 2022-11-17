 document.title = "This is DOM Manipulation"
 document.body.style.backgroundColor = "pink"
 

// var h1 =  document.getElementById("head1")
// console.log(h1); 
var h1 = document.getElementsByClassName('heading')
console.log(h1);

h1[1].innerHTML = "New Content to be added"
for (let i=0;i<h1.length; i++)
h1[i].style.color = "red"

var btn = document.querySelector('button')
console.log(btn);
btn.style.borderRadius = "5px"

var head1 = document.querySelector('.heading')
console.log(head1);
head1.style.backgroundColor = "yellow"


var allh1 = document.querySelectorAll('h1');
console.log(allh1);


// h1.innerHTML = "<h1 style='text-align:center; color:white'> Updated Content </h1>"
// h1.innerText = "Data  Updated"



// Events
// 1. Inline Event handling
// 2. Handle the event by their reference
// 3. Handle event by adding addEventListener



function performTask(){
para = document.querySelector('p')
para.style.fontFamily = 'arial'
// para.innerText = "Paragraph updated"
para.style.visibility = "hidden"
}

var btn2 = document.getElementsByTagName('button')[1];
console.log(btn2);

btn2.onclick = Task2;

function Task2(){
para.style.visibility = "visible"
para.removeEventListener('mouseover', colorChange)

}

var para = document.querySelector('p');


para.addEventListener('mouseover', colorChange);


function colorChange(){
    para.style.backgroundColor = "orange"
}
