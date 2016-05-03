var background = document.querySelector('h2');
var timing = setInterval(randomColor, 100);

function randomColor() {
  var number = Math.floor(Math.random(0) * 220);
  background.style.backgroundColor = "hsl(" + number + ", 80%, 50%)";
}

