const button = document.querySelector("button")
button.addEventListener("click", timeOut)

// setTimeout
function timeOut(){
  // setTimeout(() => console.log('Time Out'), 5000)
  setTimeout(function() {
    console.log("salam");
  }, 5000)
}

function myFunction() {
  console.log("Time out!");
}

// ===========================
// setInerval

function timeOut(){
  setInterval(() => console.log('Time Out'), 2000)
  // setInterval(function() {
  //   console.log("salam");
  // }, 5000)
}

// ===========================
// clearInerval

function timeOut(){
  clearInterval(inverval)
  }
  const inverval = setInterval(() => console.log('Time Out'), 2000)