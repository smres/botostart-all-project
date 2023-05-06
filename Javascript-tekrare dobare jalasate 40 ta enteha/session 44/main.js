const element = document.createElement("a");
const container = document.querySelector(".container");
element.id = "anchor2";
element.className = "class1 class2";
// element.href = "https://botostart.ir";
element.setAttribute("href", "https://botostart.ir");
element.setAttribute("data-list", "[1,2,3]");
element.innerText = "Go to botostart";
// element.target = "_blank";
element.setAttribute("target", "_blank");
element.style.color = "green";

const old = document.getElementById("anchor");
// container.replaceChild(element, old);
console.log(container.firstElementChild);

old.remove();

// container.appendChild(element);
/* container.innerHTML =
   "<a href='https://botostart.ir' target='_blank'>botostart</a>";*/
