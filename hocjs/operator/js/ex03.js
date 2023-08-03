//Nullish 
//var a = 10;
// var a = false;
// console.log(a);

// var b = a ?? 'Không có gì';

// console.log(b);

//Chuyển Nullish thành toán tử 3 ngôi

var a;
var b = a !== undefined && a !== null ? a: 'Không có gì';

console.log(b);

//Toán tử &&

var a = "";

//var result = a>=1 && 'F8 - Học lập trình';

var result = a && 'F8 - Học lập trình';

console.log(result);

//falsy: false, 0, "", NaN, undefined, null
//truthy: Các trường hợp còn lại
