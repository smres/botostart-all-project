const button = document.querySelector("button");
button.addEventListener("click", timeOut);

// function timeOut() {
//   setTimeout(() => console.log("Time Out"), 5000);
// }

function timeOut() {
  // clearInterval(interval);
  clearTimeout(timeOut_1);
  console.log("clearInterval");
}

const interval = setInterval(() => console.log("setInterval"), 2000);
const timeOut_1 = setTimeout(() => console.log("Time Out"), 2000);

// myFunction();
function myFunction() {
  console.log("Time out!");
}
