const field = document.getElementById("input")
field.addEventListener("keydown", function(event) {
  // console.log(event.target.value);
  // console.log("happened");
  console.log(event.keyCode);
  document.querySelector("p").innerText = event.target.value
})