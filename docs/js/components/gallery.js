const btn = document.getElementById('btn');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

btn.onmouseover = logMouseOver;
btn.onmouseout = logMouseOut;

function logMouseOver() {
  icon1.style.fill = "black";
  icon2.style.fill = "black";
}

function logMouseOut() {
  icon1.style.fill = "white";
  icon2.style.fill = "white";
}
