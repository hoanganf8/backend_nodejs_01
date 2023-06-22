var a = 10, b = 20;
console.log(`Kết quả = ${a + b}`);
console.log(`Kết quả = ${a - b}`);
console.log(`Kết quả = ${a * b}`);
console.log(`Kết quả = ${a / b}`);

var c = 5;
var d = 2;
console.log(`Kết quả = ${c % d}`);
console.log(`Kết quả = ${c ** d}`); //5^2

var count = 0;
// count = count+1;
count++;
++count;
console.log(`Count = ${count}`);

var count = 10;
count--;
--count;
console.log(`Count = ${count}`);

// var count = 1;
//var total = 10 + ++count;
/*
count = count + 1
total = 10 + count
*/
//var total = 10 + count++;
/*
total = 10 + count
count = count+1;
*/

var count = 1;
var result = count++ + count++;
console.log(result);

var a = 10;
var b = 20;
var c = a;
a = b;
b = c;
/*
a = 20
b = 10
*/