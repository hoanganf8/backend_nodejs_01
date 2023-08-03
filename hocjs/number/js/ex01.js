/*
1. Số nguyên

2. Số thực
*/

var age = 31;
// var price = 12.5;

// console.log(typeof age);
// console.log(typeof price);

// console.log(Number.prototype);
// console.log([Number]);

//1. Chuyển số thành chuỗi

console.log(age.toString(16));
//Hệ thập phân (10)
//Hệ nhị phân (2)
//Hệ bát phân (8)
//Hệ thập lục phân (16)

//2. Số infinity
//=> Số vượt quá mức lưu trữ cho phép
var number = 100;
var result = 0;
while (number != Infinity) {
  result = number;
  number *= number;
}

// console.log(number);
// console.log(result);

//3. NaN = Not A Number

var a = 1;
var b = "a";

var result = a / b;
// console.log(result);

// if (isNaN(result)) {
//   console.log(`Kết quả không hợp lệ`);
// }

//4. Ép kiểu
var a = "1.5";
var b = 2;

// var result = parseInt(a) + parseInt(b);

//var result = parseFloat(a) + parseFloat(b);

// var result = +a + +b;

// console.log(result);

var c = "12.1a";
// console.log(parseInt(c));

//5. Kiểm tra kiểu số

//5.1. Kiểm tra kiểu số nói chung

var number = 30.5;
// if (typeof number === "number") {
//   console.log(`Đây là số`);
// }

//5.2. Kiểm tra kiểu số nguyên

if (Number.isInteger(number)) {
  console.log(`Kiểu số nguyên`);
}

//5.3. Kiểm tra kiểu số thực
if (typeof number === "number" && parseInt(number) !== number) {
  console.log(`Số thực`);
}

//6. Làm tròn

var number = 20.5;
// console.log(number.toFixed(0));
// Trả về 1 chuỗi

//7. Định dạng số
var price = 12000.56;
// console.log(price.toLocaleString());
// Trả về 1 chuỗi

Number.prototype.format = function (
  decimals = 0,
  decimalSeparator = ".",
  thousandsSeparator = ",",
) {
  var number = window.parseFloat(this.valueOf());
  number = number.toFixed(decimals);
  number = window.parseFloat(number);
  number = number.toLocaleString();
  number = number.replaceAll(",", thousandsSeparator);
  number = number.replaceAll(".", decimalSeparator);
  return number;
};

String.prototype.format = Number.prototype.format;

console.log(price.format(2, ".", " "));

var price = "12000.56";
console.log(price.format(2));

function getMsg() {
  console.log(`F8`);
}

//Bổ sung liên quan đến hàm

function getA(text) {
  console.log(`getA ${text}`);
}

var getB = getA;

var getC = getB;

getC("F8");
