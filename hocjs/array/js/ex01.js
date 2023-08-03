//Object, Function => Reference Type

//Array được phát triển từ Object

//Xây dựng từ hàm tạo Array

console.log(Array.prototype);
// console.log([Array]);

//Mảng là gì?
/*
- Kiểu dữ liệu phức hợp
- Rất nhiều các giá trị, nhiều kiểu dữ liệu khác nhau
- Mỗi giá trị gọi là Element
- Địa chỉ của giá trị đó gọi là Index (Bắt đầu từ 0)
*/

//Khai báo mảng
var users = []; //Khai báo mảng rỗng
// var customers = new Array(); //Khởi tạo giống Object

var customers = ["Quân", "Dương", "An", 1, 2, 3]; //Khai báo mảng có giá trị ban đầu

//Lấy số lượng phần tử của mảng
var customerCount = customers.length;
// console.log(`Số lượng phần tử: ${customerCount}`);

var services = null;

//Kiểm tra 1 biến có phải là mảng hay không?
// if (Array.isArray(services)) {
//   console.log(`Mảng`);
// } else {
//   console.log(`Không phải mảng`);
// }

// if (services !== null && services.constructor.name === "Array") {
//   console.log(`Mảng`);
// } else {
//   console.log(`Không phải mảng`);
// }

//Thêm phần tử vào mảng
// customers[6] = "Hoàng Anh";
customers[customers.length] = "Hoàng Anh";
customers[customers.length] = "Văn Quân";

//Sửa phần tử
customers[0] = "Lưu Anh Quân";

// delete customers[0];
console.log(customers);

//Duyệt mảng
//1. Dùng for
// for (var i = 0; i < customers.length; i++) {
//   console.log(customers[i]);
// }

//2. Dùng for of
// for (element of customers) {
//   console.log(element);
// }

//3. Dùng for in
// for (index in customers) {
//   console.log(index, customers[index]);
// }

//Xóa mảng

var index = 5;

var newArr = [];
for (i in customers) {
  //   if (parseInt(i) === parseInt(index)) continue;
  if (+i === +index) continue;
  newArr[newArr.length] = customers[i];
}

// customers = newArr;
// console.log(customers);

// var number = "-1";
// console.log(typeof number);
// number = +number;
// console.log(number);

//Chuỗi
var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry`;

//Yêu cầu: Hiển thị số xuất hiện của từng ký tự (Trừ ký tự khoảng trắng)
var result = [];
/*
result['a'] = 1;
result['a'] = 2;
result['b'] = 1;
*/

for (var i = 0; i < content.length; i++) {
  var char = content.charAt(i);
  if (char === " ") continue;

  if (result[char] === undefined) {
    result[char] = 1;
  } else {
    result[char] = result[char] + 1;
  }
}

for (char in result) {
  console.log(`Ký tự ${char} xuất hiện ${result[char]}`);
}
