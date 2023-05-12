localStorage.setItem("name", "Mohammad");
const userData = {
  name: "Mamali",
  age: "27",
};
localStorage.setItem("userData", JSON.stringify(userData))

console.log(localStorage.getItem("name"));
const data = localStorage.getItem("userData");
console.log("ddd = ", data);
const parsedData = JSON.parse(data);
console.log(parsedData);
// localStorage.removeItem("name")
// localStorage.clear()