let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// data.name = "Rheza";
// console.log(data);

// SPREAD OPERATOR
let newData = {
  ...data,
  id: 2,
  name: "Maulana Rheza",
  username: "Rheza",
  email: "rhezaardiansyah222@gmail.com",
  hobby: ["Ngoding", "Main bola", "Makan"],
}; // meng-copy object
console.log(newData);
// console.log(data);

// DESTRUCTURING
const { street, city } = data.address;
// console.log(data.address.street);
console.log(street);
console.log(city);
