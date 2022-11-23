const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth
// canvas.height = 400

ctx.fillStyle = "#a2ebb5"
ctx.fillRect(50, 50, 150,100)

ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.strokeRect(250, 50, 150, 100)

// ctx.fillStyle = "orange"
ctx.roundRect(440, 50, 150, 100, [10])
ctx.fill()

// This will work like an eraser

ctx.font = "30px arial"
ctx.fillStyle = "blue"
ctx.fillText('Hello Firends', 200, 200)

ctx.strokeStyle = "yellow"
ctx.lineWidth = 1
ctx.strokeText('Hello Firends', 200, 300)
ctx.clearRect(0, 0, canvas.width, canvas.height)

ctx.strokeStyle = "red"
ctx.beginPath();
ctx.moveTo(50, 50)
ctx.lineTo(150, 50)
ctx.lineTo(100, 200)
// ctx.lineTo(50, 50)
ctx.closePath();
ctx.fillStyle = "green"
// ctx.stroke();
ctx.fill()


ctx.beginPath();
ctx.moveTo(200, 50)
ctx.lineTo(250, 200)
ctx.lineTo(150, 200)
ctx.closePath()
ctx.stroke()


// Draw Circle
ctx.beginPath();
ctx.arc(300, 300, 100, 0, (Math.PI)*2)
// ctx.stroke();
ctx.fill()

// radian  = (Math.PI/180) * Degree