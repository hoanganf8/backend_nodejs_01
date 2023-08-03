console.log(Array.prototype);

//Vòng lặp every => Tất cả
//Trả về true nếu tất các các lần lặp trả về true

var numbers = [1, 3, 5, 7, 9, 10];

var check = numbers.every(function (number) {
  //   console.log(number);
  //Kiểm tra xem mảng numbers có phải tất cả đều là số lẻ không?
  //   if (number % 2 !== 0) {
  //     return true;
  //   }

  //   return false;
  return number % 2 !== 0;
});

// console.log(check);

//Bài tập: Kiểm tra 1 mảng có số lẻ hay không?
//Yêu cầu: Dùng every

// var evenNumberCheck = !numbers.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// });
// console.log(evenNumberCheck);

// var numbers = [2, 4, 6, 8, 10];

// var check = numbers.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }

//   return false;
// });

// if (check === false) {
//   console.log(`Mảng có số lẻ`);
// } else {
//   console.log(`Mảng không có số lẻ`);
// }

var numbers = [1, 2, 4, 6, 7, 10];
//Kiểm tra mảng numbers có số lẻ hay không?

var check = numbers.some(function (number) {
  //   console.log(number);
  return number % 2 !== 0;
});

// console.log(check);

//Bài tập: Kiểm tra 1 mảng số xem có phải tất cả các phần tử là số lẻ không? Dùng some()

// var numbers = [1, 3, 5, 11, 9];

// var check = numbers.some(function (number) {
//   return number % 2 === 0;
// });

// if (!check) {
//   console.log(`Mảng có tất cả phần tử là số lẻ`);
// } else {
//   console.log(`Mảng có số chẵn`);
// }

//Vòng lặp filter
// var users = [
//   "Hoàng An",
//   "Dương Nguyễn",
//   "Sơn Đặng",
//   "Anh Quân",
//   "Hoàng Anh",
//   "Văn Quân",
// ];

// var keyword = "QUÂN";

// var result = users.filter(function (user) {
//   //Xử lý logic để trả về true / false
//   if (user.toLowerCase().includes(keyword.toLowerCase())) {
//     return true;
//   }

//   return false;
// });

// console.log(result);

var customers = [
  ["Nguyễn Văn A", 30],
  ["Nguyễn Văn B", 19],
  ["Nguyễn Văn C", 25],
  ["Nguyễn Văn D", 24],
  ["Nguyễn Văn E", 27],
];

// console.log(customers);

//Yêu cầu: Lọc tất cả khách hàng có tuổi từ 25 đến 30

var minAge = 25;
var maxAge = 30;

var result = customers.filter(function (customer) {
  if (customer[1] >= minAge && customer[1] <= maxAge) {
    return true;
  }

  return false;
});

console.log(result);
