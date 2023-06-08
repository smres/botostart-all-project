const userData = {
  name: "mamali",
  age: 24,
  address: {
    city: "Tehran",
    street: "darakeh",
  },
};

const {
  name,
  age,
  address: { city, street },
} = userData;
// const {city, street} = address;
console.log(name);
console.log(age);
console.log(city);
console.log(street);
