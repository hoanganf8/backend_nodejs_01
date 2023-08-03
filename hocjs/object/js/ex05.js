Object.prototype.getMessage = function () {
  return `Xin chào F8`;
};
// var users = {};
// var users = new Object();

// console.log(users.getMessage());

//Function Constructor
function Customer(name) {
  this.name = name;
}

Customer.prototype.getEmail = function () {
  return `hoangan@fullstack.edu.vn`;
};

// console.log(Customer.prototype);

var customer = new Customer();

// console.log(customer.getMessage());
// console.log(customer.getEmail());

function Service(name, price) {
  this.name = name;
  this.price = price;
  this.getName = function () {
    return this.name;
  };
}

// console.log(Service.prototype);

// var service = new Service("Đào tạo", 5000);

// console.log(service);

// var service2 = new Service("Gia công", 12000);
// console.log(service2);

var users = {
  name: "Hoàng An",
  email: "contact@fullstack.edu.vn",
  age: 31,
};

var customers = {
  service: "Đào tạo",
};

// for (var key in users) {
//   console.log(users[key]);
// }

// Object.keys(users).forEach(function (key) {
//   console.log(users[key]);
// });

// var result = Object.assign(users, customers);
// console.log(result);
// console.log(users);
// console.log(customers);
