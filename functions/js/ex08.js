/*
Giải thuật đệ quy: 
- Áp dụng  với hàm
- Gọi lại chính hàm đang định nghĩa
Chú ý: Thay đổi đối số => Không bị vòng lặp vô hạn
*/

// function getTotal(n) {
//   //console.log(n);

//   if (n > 1) {
//     n += getTotal(n - 1);
//     //console.log(n);
//   }

//   return n;
// }

// var result = getTotal(10);

// console.log(result);

//Tính tổng S = 1 + 2 + 3 + .. + N

// var getTotal = function (n) {
//   if (n === 1) return n;

//   n += getTotal(n - 1);
//   return n;
// };

// console.log(getTotal(100));

var finonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return finonaci(n - 1) + finonaci(n - 2);
};

// console.log(finonaci(5));

/*
fibonaci(5) = fibonaci(4) + fibonaci(3)
              fibonaci(3) + fibonaci(2) + fibonaci(2) + fibonaci(1) 
              fibonaci(2) + fibonaci(1) + 1 + 1 + 1
              1 + 1 + 1 + 1 + 1 = 5
*/

//global scope
// var a = 1;

// function getA(b) {
//   //function scope
//   if (b) {
//     //block scope
//   }
// }

// if (a >= 1) {
//   //block scope
// }

// for (var i = 1; i <= 5; i++) {
//   //block scope
// }

// var customer = "Hoàng An";
// console.log(window.customer);
// console.log(window.finonaci(10));

// var name = "F8";

// console.log(name);

// window.setTimeout(function () {
//   console.log(`F8`);
// }, 1000);

// console.log(window.location);

// window.getMessage = function () {
//   console.log(`F8`);
// };

// window.age = 30;

var getMessage = function () {
  console.log(`F8`);
};
