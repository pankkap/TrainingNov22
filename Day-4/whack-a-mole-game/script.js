var score = 0;
function start() {
  document.getElementById("mole").style.visibility = "hidden";
  document.getElementById("mud").style.visibility = "hidden";
  document.getElementById("start").style.visibility = "hidden";

  var allMuds = document.querySelectorAll(".dirt");
  for (let i = 0; i < allMuds.length; i++)
    allMuds[i].style.visibility = "visible";

  var allMoles = document.querySelectorAll(".mole");
  for (let i = 0; i < allMoles.length; i++)
    allMoles[i].style.visibility = "visible";

  var allPoints = document.querySelectorAll(".points");
  for (let i = 0; i < allPoints.length; i++)
    allPoints[i].style.visibility = "visible";

  setInterval(() => {
    var random = Math.floor(Math.random() * allMoles.length) + 1;
    // console.log(random);
    allMoles[random - 1].style.visibility = "visible";
    setTimeout(() => {
      for (let i = 0; i < allMoles.length; i++) {
        allMoles[i].style.visibility = "hidden";
      }
    }, 900);
  }, 1000);

  for (let i = 0; i < allMoles.length; i++) 
  allMoles[i].addEventListener('click', ()=>{
    var audio = new Audio('');
    allMoles[i].src = ""
    audio.play();
    allPoints[1].innerHTML = score++; 
  })
}
