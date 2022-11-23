const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");

var circle={
x:200,
y:200,
r:30,
dx:10,
dy:10
}

function drawCircle()
{
    ctx.beginPath()
    ctx.fillStyle = "purple"
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI*2)
    ctx.fill();
}

function update(){

   ctx.clearRect(0,0, canvas.width, canvas.height)
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;

    //Detect Wall
    if(circle.x + circle.r > canvas.width || circle.x - circle.r < 0)
    circle.dx *=-1

    if(circle.y + circle.r > canvas.height || circle.y - circle.r < 0)
    circle.dy *=-1
    requestAnimationFrame(update)
     
}

update();