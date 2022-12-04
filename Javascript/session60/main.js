// =========================
// refactor callback hell with async-await

console.log("Start");
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Milad",
        email: "milad@botostart.ir",
      });
    }, 3000);
  });
}

function getUserAge(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ age: 24 });
    }, 2000);
  });
}

// async await
async function displayData() {
  const data = await getUserData();
  const age = await getUserAge(data.name);
  console.log(data, age);
}

displayData()