// function getTotal(a, b) {
//   var total = a + b; //total = Biến cục bộ
//   return total;
// }

// console.log(total);

// console.log(`Total = ${getTotal(5, 10)}`);

// var msg = "F8 - Học lập trình";

// function getMessage() {
//   //var msg;
//   return msg;
// }

// function setMessage(value) {
//   msg = value;
// }

// setMessage(`Sơn Đặng`);

// console.log(`Message = ${getMessage()}`);

//expression function

// var getMessage = function (msg) {
//   return `F8 - Học lập trình: ${msg}`;
// };

// console.log(getMessage("Hoàng An"));

var A = function (value) {
  console.log(`A Func ${value}`);
};

var B = function (fn) {
  //console.log(fn);
  fn();
};

B(function () {
  A("F8");
});
// B(function () {
//   console.log(`F8 - Học lập trình`);
// });

var makeTotal = function () {
  //console.log(args);
  console.log(arguments);
};

makeTotal(1, 5, 2, 10, 8);

//Buổi sau: callback, closure, đệ quy
