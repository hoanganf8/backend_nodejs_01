// for (var index = 1; index <= 10; index++) {
//   console.log(`F8 = ${index}`);

//   if (index === 5) {
//     break;
//   }
// }

var start = 1;
var end = 10;

//Tìm số chẵn nhỏ nhất trong khoảng từ start đến end
var result = null;
for (var index = start; index <= end; index++) {
  if (index % 2 === 0) {
    result = index;
    break;
  }
}

console.log(`Result = ${result}`);

//Từ khóa continue

for (var index = 1; index <= 10; index++) {
  if (index === 5) {
    continue;
  }
  console.log(`Hoàng An = ${index}`);
  console.log(`F8 = ${index}`);
}
