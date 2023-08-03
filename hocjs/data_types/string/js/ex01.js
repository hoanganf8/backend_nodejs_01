//Khai báo kiểu chuỗi
//- Kiểu dữ liệu nguyên thủy
//- Kiểm tra kiểu dữ liệu của 1 biến => Dùng từ khóa typeof
//Hàm tạo = Function Constructor
//Truy cập vào phương thức, thuộc tính
//tenBienObj.tenThuocTinh
//tenbienObj.tenPhuongThuc()

var fullname = "Hoàng An Tạ"; //gán = 1 chuỗi
var fullname2 = String("Tạ hoàng An"); //gán thông qua hàm tạo => ít dùng
var fullname3 = new String("Tạ Hoàng An");

//console.log(fullname);
// console.log(fullname, typeof fullname);
// console.log(fullname2, typeof fullname2);
// console.log(fullname3, typeof fullname3);
// if (typeof fullname === "string") {
//   console.log(`Đây là kiểu chuỗi`);
// }

console.log(String.prototype);
// console.log(`Độ dài của chuỗi là ${fullname.length}`);

//length => Trả về độ dài
//charAt(index) => Lấy từng ký tự trong chuỗi theo index (index bắt đầu từ 0)
//charCodeAt(index) => Trả về mã ascii của ký tự
//slice(start, end) => Cắt chuỗi từ index = start đến index = end (Với end tính từ 1, start tính từ 0)
/*
Chú ý: 
- Nếu start âm => Cắt từ cuối chuỗi theo độ dài = start
- Nếu end không được truyền đối số => Cắt từ start cho đến hết chuỗi

indexOf(subStr) => Tìm chuỗi subStr đầu tiên trong chuỗi cha, nếu tìm thấy sẽ trả về index, nếu không sẽ trả về -1

lastIndexOf(subStr) => Tìm chuỗi cuối cùng

includes(subStr) => Tìm chuỗi trong chuỗi cha, trả về true false

replace(search, with) => Thay thế chuỗi search thành with => Chỉ thay thế vị trí đầu tìm được

replaceAll(search, with) => Thay thế tất cả

=> Lưu ý: Hàm search() có thể tìm theo Regex (Regular Expression)

toUpperCase()
toLowerCase()

trim() => Xóa khoảng trắng đầu và cuối chuỗi
trimStart() => Xóa khoảng trắng đầu chuỗi
trimEnd() => Xóa khoảng trắng cuối chuỗi

concat() => Nối chuỗi

split(char) => Chuyển chuỗi thành mảng

match() => Cắt chuỗi dựa vào biểu thức chính quy

toString() => Chuyển các kiểu dữ liệu khác về chuỗi
*/

// var url = `https://fullstack-nodejs.fullstack.edu.vn/`;

// console.log(url);
//console.log(url.replace(/\/$/, "")); //Regex

//var str = `Học F8 lập trình tại F8`;
// console.log(str.concat("Hoàng An", "Sơn Đặng"));

// console.log(str.split(" "));

var content = `Lorem ipsum, dolor sit 0388875179 amet consectetur adipisicing elit. Non ut provident exercitationem 0123456789 dignissimos est totam accusamus aliquam! Ex asperiores, minima harum aut suscipit sunt perspiciatis velit veritatis corrupti eveniet dolore`;

// console.log(content);

var pattern = /0\d{9}/g;

var phone = content.match(pattern);

console.log(phone);

var age = 30;
console.log(age);
console.log(age.toString());
