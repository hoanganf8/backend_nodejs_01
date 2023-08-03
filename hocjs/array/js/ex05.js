console.log(Array.prototype);
var numbers = [1, 3, 5, 7, 9];

//Tìm phần tử có giá trị bằng 3

// var result = numbers.filter(function (number) {
//   return number > 3;
// });

// console.log(result);

// var result = numbers.find(function (number) {
//   return number > 3;
// });

// var result = numbers.findLast(function (number) {
//   return number > 3;
// });

// console.log(result);

var numbers = [1, 3, 5, 7, 9];

// var index = numbers.findIndex(function (number) {
//   return number === 3;
// });

var index = numbers.findLastIndex(function (number) {
  return number > 3;
});

// console.log(index);

//find()
//findLast()
//findIndex()
//findLastIndex()

var content = `Theo quy định, doanh nghiệp muốn tổ chức chuyến bay, khi nộp hồ sơ xin cấp phép gửi Cục Lãnh sự phải có công văn của UBND thành phố chấp thuận cho cách ly tại đây. Ông Dũng được phân làm Trưởng ban chỉ đạo công tác phòng chống dịch của Hà Nội, có trách nhiệm, quyền hạn duyệt, ký chủ trương cách ly trên địa bàn Thủ đô. Vì vậy, ông được các công ty lữ hành "nhờ vả" cấp công văn với mức "lại quả" 1-2 triệu đồng/khách, cáo trạng nêu.`;
console.log(content);

var length = 20;

//Yêu cầu: Cắt 20 từ đầu tiên và nối thành 1 đoạn văn
// var word = content.split(" ").slice(0, length).join(" ") + "...";
var word =
  "..." +
  content
    .split(" ")
    .slice(-1 * length)
    .join(" ");
console.log(word);
