/*
S = 1 + 2 + 3 + 4 + 5
*/
// var total = 0;
// total = total + 1;
// total = total + 2;
// total = total + 3;
// total = total + 4;
// total = total + 5;

// console.log(`Total = ${total}`);

// for (var index = 1; index <= 10; index += 2) {
//   console.log(`Xin chào F8 ${index}`);
// }

// for (var index = 10; index >= 1; index -= 3) {
//   console.log(`Xin chào F8 ${index}`);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     for (var k = 1; k <= 5; k++) {
//       console.log(`i = ${i} - j = ${j} - k = ${k}`);
//     }
//   }
// }

//Bài tập: S = 1 + 2 + 3 + 4 + ... + N

// var n = 5;
// var total = 0;
// for (var index = 1; index <= n; index++) {
//   total = total + index;
// }

// console.log(`Total = ${total}`);

/*
N = 5;
total = 0;
- index = 1: total = 0 + 1 = 1
- index = 2: total = 1 + 2 = 3
- index = 3: total = 3 + 3 = 6
- index = 4: total = 6 + 4 = 10
- index = 5: total = 10 + 5 = 15
*/

//Bài tập 2: 1 + 3 + 5 + 7 + ... + N

// var n = 20;
// var tong = 0;
// for (var i = 1; i <= 20; i += 2) {
//   tong = tong + i;
//   console.log(i);
// }
// console.log(`Tổng = ${tong}`);

/*
Bài tập 3:
1 + 1*2 + 1*2*3 + 1*2*3*4 + ... + 1*2*3*4*5*...*N
*/

var n = 5;

var factorial = 1;

var total = 0;

for (index = 1; index <= n; index++) {
  factorial *= index;
  //   console.log(factorial);
  total += factorial;
}

console.log(`Total = ${total}`);

/*
Kiểm tra 1 số nguyên có phải là số nguyên tố hay không?

- CHỈ chia hết cho 1 và chính nó
- > 1

Cách làm:
- Kiểm tra > 1 hay không?
+ <=1 => Kết luận không phải số nguyên tố
+ > 1 => Chuyển xuống bước dưới

Kiểm tra trong khoảng từ từ 2 => n - 1 xem có chia hết cho số nào nữa hay không?
*/

var n = 11;
if (Number.isInteger(n)) {
  var check = true; //Giả định n là số nguyên tố
  if (n <= 1) {
    check = false; //Cắm cờ
  } else {
    for (index = 2; index < n; index++) {
      if (n % index === 0) {
        check = false;
        index = n; //Thoát vòng lặp
      }
    }
  }

  //check = true|false => Kỹ thuật đặt cờ hiệu (cắm cờ)

  if (check) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không phải số nguyên tố`);
  }
} else {
  console.log(`${n} không phải số nguyên`);
}
