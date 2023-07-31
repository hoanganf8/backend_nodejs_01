//Spread Operator

// const courses = {
//   courseName: "Fullstack",
//   coursePrice: 20000000,
// };

// const users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   ...courses,
// };

// // const users2 = { ...users }; //clone object

// const users2 = JSON.parse(JSON.stringify(users));

// console.log(users);
// console.log(users2);

//Enhanced Object Literals
// const name = "Hoàng An";
// const email = "hoangan@fullstack.edu.vn";
// const address = "Hà Nội";
// const job = undefined;

// const users = {
//   name,
//   email,
//   location: address,
//   job,
// };

// console.log(users);

// var getMessage = function (opt) {
//   console.log(opt);
// };

// const username = "Hoàng An";
// const email = "contact@hoangan.net";

// getMessage({
//   username,
//   email,
// });

//Optional Chaining (?.)

// const users = null;

// console.log(users?.name);

// const users = "F8";
const users = ["An", "Anh"];

if (users?.length) {
  console.log(`Có phần tử`);
  users.forEach?.(function (user) {
    console.log(user);
  });
} else {
  console.log(`Không có`);
}
