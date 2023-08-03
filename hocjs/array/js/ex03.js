var customers = ["An", "Tùng", "Tuấn", "Dương"];

// var handleCustomer = function (customer, index) {
//   console.log(customer, index);
// };

// customers.forEach(handleCustomer);

// var fullname = "Hoàng An";
// Array.from(fullname).forEach(function (char) {
//   console.log(char);
// });

// var content = "ABC 0388875179 vsd 0123456789";

// var pattern = /0\d{9}/g;

// var phone = content.match(pattern);

// phone.forEach(function (item) {
//   console.log(item);
// });

var newArr = customers.map(function (customer, index) {
  return `<h2>${customer}</h2>`;
});

// console.log(newArr);

var html = newArr.join("");

document.write(html);
