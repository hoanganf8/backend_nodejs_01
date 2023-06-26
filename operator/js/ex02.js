var firstName = 'Hoàng An';
var lastName = 'Tạ';

var fullname = firstName + ' ' + lastName;

console.log(fullname);

var count = 5;

// count = count + 5;

// count += 5;

// count -= 5;

// count *= 5;

count %= 2;

// console.log(count);

/*
>
>=
<
<=
==
===
!=
!==
*/

// var a = 10;
// var b = '10';
// var check = a != b; //return boolean

// console.log(check);

// if (10 === a) {
//     console.log('Thỏa mãn điều kiện');
// }

/*
&& => AND
|| => OR
! => NOT
*/

var a = 10;
var b = 5;
// var check = a >= 5 && a <= 10;
//var check = !(a < 5 || a >= 10);

// check = !check;

// var check = a >= 10 && (b < 2 || b >=5);

// console.log(check);

//Toán tử 3 ngôi
/*
Nếu a > 5 gán text "Thỏa mãn điều kiện" vào biến b, ngược lại gán "Không thỏa mãn điều kiện"
*/

var a = 5;
//var b = a >= 5 ? "Thỏa mãn điều kiện": "Không thỏa mãn điều kiện";

var b = a >= 5 ? 10: null;

//Cú pháp: dieukien ? giatridung: giatrisai

console.log(b);

var c = 5;
var s = 1 + 2 + 3 + c >= 10 ? 20 : 0 + 10;
console.log(s);

//kết hợp với gán, hiển thị kết quả

console.log(c >= 5 ? 'ok': 'not ok');

var show = `Kết quả = ${a >= 5 ? 'ok': 'not ok'}`;

console.log(show);