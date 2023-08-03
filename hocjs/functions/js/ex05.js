// var getA = function (func, ...args) {
//   setTimeout(function () {
//     console.log(`Func A`);
//     func(...args);
//   }, 1000);
// };

// var getB = function (msg, type, course) {
//   console.log(`Func B ${msg} ${type} ${course}`);
// };

// getA(getB, "F8", "success", "Back-End");

// var handleShowLog = function (msg, type) {
//   console.log(`Nội dung hàm setTimeout: ${msg} ${type}`);
// };

// setTimeout(handleShowLog, 1000, "F8", "success");

var count = 0;
var myInterval = setInterval(function () {
  // console.log(`Xin chào F8 ${Math.random()}`);
  count++;
  console.log(`Count = ${count}`);
  if (count === 5) {
    clearInterval(myInterval);
  }
}, 1000);
