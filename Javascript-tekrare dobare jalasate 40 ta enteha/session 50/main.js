localStorage.setItem("name", "Mohammad");
const userData = {
  name: "Mamali",
  age: "27",
};
localStorage.setItem("userData", JSON.stringify(userData));

const data = localStorage.getItem("userData");
const parsedData = JSON.parse(data);
console.log(parsedData);
localStorage.removeItem("name")
localStorage.clear()