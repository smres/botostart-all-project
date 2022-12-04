const data = {
  id: 1,
  name: "Milad",
  userName: "bret",
  email: "Sincere@april.biz",
  address: {
    street: "Lulas Light",
    suite: "Apt.556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

const name = data.name;
const street = data.address.street;
const city = data.address.city;
const lat = data.address.geo.lat;

const string = `HI ${name}, You live in ${street},${city}, ${lat}`;
console.log(string);
