const button = document.querySelector("button");
button.addEventListener("mousemove", function () {
  console.log("clicked");
});

// button.forEach(function (item) {
//   item.addEventListener("click", clickHandler);
// });

// function clickHandler(event) {
//   console.log("clicked", event.target.id);
//   event.target.style.color = "red";
// }

// const anchor = document.querySelector("a");
// anchor.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event.target);
// });
