console.log(Array.prototype);

var customers = ["An", "Tùng", "Tuấn", "Dương"];
// console.log(customers);
//at() => Lấy phần tử theo index
//fill() => Thay thế tất cả phần tử trong mảng thành 1 giá trị
//indexOf() => Tìm phần tử trong mảng và trả về index
//lastIndexOf() => Tìm phần tử cuối
//includes() => Tìm phần tử trong mảng và trả về true, false
//slice(start, end) => Cắt mảng
//toString() => Chuyển mảng về chuỗi và nối với nhau bởi dấu ,
//join() => Chuyển mảng về chuỗi, nối bằng ký tự bất kỳ truyền vào
//concat() => Nối mảng

//push() => Thêm phần tử vào cuối mảng
//- Trả về số lượng phần tử sau khi đã thêm
//- Thêm vào mảng ban đầu

//unshift() => Thêm phần tử vào đầu mảng
//- Trả về số lượng phần tử sau khi đã thêm
//- Thêm vào mảng ban đầu

//pop() => Xóa phần tử cuối mảng
//Trả về giá trị phần tử vừa xóa
//Thay đổi mảng ban đầu

//shift() => Xóa phần tử đầu mảng
//Trả về giá trị phần tử vừa xóa
//Thay đổi mảng ban đầu

//splice(index, number) => Xóa number phần từ phần tử thứ index

//sort() => Sắp xếp tăng dần

//reverse() => Đảo ngược mảng

// var deleted = customers.shift();
// console.log(customers);
// console.log(deleted);

// customers.splice(1, 2);

// customers.sort();

// customers = customers.reverse();

// console.log(customers);

var numbers = [5, 9, 1, 100, 2];

numbers.sort(function (a, b) {
  //console.log(a, b);
  //return a - b;
  //   return b - a;
  //   if (b > a) {
  //     return 0;
  //   }
  //return -1;
  //Âm => Đổi chỗ
  //Dương => Giữ nguyên
});

// console.log(numbers);

var customers = [
  "Ta Hoang An",
  "Nguyen Van Tuan",
  "Pham Anh Duong",
  "Ta Thi Lan",
];

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).at(0);
};

customers.sort(function (a, b) {
  //b => phần tử trước
  //a => phần tử sau
  //Để sắp xếp tăng dần = phần tử trước < phần tử sau
  //So sánh nếu phần tử trước > phần tử sau => đổi chỗ (return -1)
  if (getFirstName(b) > getFirstName(a)) {
    return -1;
  }
});
console.log(customers);
