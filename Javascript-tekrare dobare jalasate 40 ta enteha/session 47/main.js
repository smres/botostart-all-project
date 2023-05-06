const field = document.getElementById("input");
field.addEventListener("keydown", function (event) {
  console.log(event.key);
  document.querySelector("p").innerText = event.target.value;
});
