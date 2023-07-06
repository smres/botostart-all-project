const name = "Mamali";
const age = 4;

const sayHi = function () {
  console.log("salam");
};

const sum = (a, b) => {
  return a + b;
};

// Named
export { name, age, sayHi };

// Default
export default sum;
