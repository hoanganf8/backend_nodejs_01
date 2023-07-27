var users = [
  {
    id: 1,
    name: "Hoàng An",
  },

  {
    id: 2,
    name: "Quân",
  },

  {
    id: 3,
    name: "Tuấn",
  },
];

console.log(users);

//Chuyển thành json

var userJson = JSON.stringify(users);

console.log(userJson);
console.log(typeof userJson);

//Chuyển json thành array, object
var user2 = JSON.parse(userJson);

console.log(user2);

console.log(JSON);
