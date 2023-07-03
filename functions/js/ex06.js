// var getTotal = function (a, b) {
//   var total = a + b;
//   var showResult = function (msg) {
//     console.log(`${msg}${total}`);
//   };
//   return showResult;
// };

// var total1 = getTotal(10, 20);
// total1(`Kết quả = `);
//console.log(total1);

// var getTotal = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// var add = getTotal(10);
// console.log(add(20));
// console.log(add(30));

// //getTotal(a, b)

var showFirstName = function () {
  //console.log(arguments);
  var args = arguments;
  return function () {
    console.log(args);
  };
};

var firstName = showFirstName("An", "Hoàng");
firstName();

//Tìm hiểu Thunk Function
