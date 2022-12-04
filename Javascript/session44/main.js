const element = document.createElement("a");
const container = document.querySelector(".container");
element.id = "anchor2";
// element.classList = ['class1 class2'];
element.className = "class1 class2";
// element.href = "https://botostart.ir"
element.setAttribute("href", "https://botostart.ir");
element.setAttribute("data-list", "[1,2,3]");
element.setAttribute("title", "title on hover");
element.setAttribute("target", "_blank");
element.innerText = "Go to botostart";
element.style.color = "red";
console.log(element);
// container.appendChild(element)

const old = document.getElementById("anchor");
old.remove();
// container.replaceChild(element, old);

// =====================================

// container.innerHTML = "<a href='https://botostart.ir' target='_blank'>MatrixStartUp</a>"
