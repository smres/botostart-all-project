const anchor = document.getElementById("anchor");
console.log(anchor);
console.log(anchor.classList);
anchor.id = "anchor2";
console.log(anchor.id);
anchor.href = "https://google.com";
anchor.style.display = "none";

const p = document.getElementsByClassName("paragraph");
console.log(p[0].className);
console.log(p[0].innerText);
p[0].innerHTML = "<span>mohammad reza</span>";
const header = document.getElementsByTagName("h1");
console.log(header[0]);
header[0].style.color = "red";
header[0].style.backgroundColor = "silver";
header[0].style.fontSize = "50px";
