/*
Object, Array

1. Dustructuring
*/

const users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
  address: "Nam Từ Liêm - Hà Nội",
  province: undefined,
  getName: function () {
    return "Hoàng An";
  },
};

const {
  name: username,
  email,
  province = "Hà Nội",
  addressShipping = "Hưng Yên",
  getName,
  ...rest
} = users;

// console.log(username);
// console.log(email);
// console.log(province);
// console.log(addressShipping);
// console.log(getName());
// console.log(rest);

console.log("Dustructuring Array");

const customers = ["Hoàng An", "hoangan.web@gmail.com", 31, "Hà Nội"];

const [customerName, customerEmail, ...last] = customers;
// console.log(`Name: ${customerName}`);
// console.log(`Email: ${customerEmail}`);
// console.log(`Last:`, last);

const getMessage = function ({ name, email }) {
  //   const { name, email } = opt;
  console.log(name, email);
};

getMessage({
  name: "Hoàng An F8",
  email: "hoangan@fullstack.edu.vn",
});

const posts = [
  {
    id: 1,
    title: "Bài 1",
  },
  {
    id: 2,
    title: "Bài 2",
  },
  {
    id: 3,
    title: "Bài 3",
  },
];

const html = posts
  .map(function ({ id, title: postTitle }) {
    return `<h3>${id} - ${postTitle}</h3>`;
  })
  .join("");

document.write(html);
