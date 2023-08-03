/*
Khai báo biến: let, const

Scope

1. Global Scope

2. Local Scope

- Block Scope: if, switch, for, while,...
- Function Scope: function
*/

// function getMsg() {
//   //Function Scope
//   var a = 10;

//   if (a >= 10) {
//     //Block Scope
//     var b = 20;
//   }

//   for (var i = 1; i <= 5; i++) {
//     //Block Scope
//   }
// }

// var a = 10;
// if (a >= 10) {
//   let b = 20;
//   console.log(b);
//   if (b >= 20) {
//     console.log(b);
//   }
// }

// console.log(b);

// for (let i = 1; i <= 5; i++) {
//   console.log(`i = ${i}`);
// }

// console.log(i);

function getMsg() {
  let a = 10;
  let b = 1;

  if (b >= 0) {
    let a = 20;
    console.log(a);
  }

  console.log(a);
}

getMsg();

/*
const: Giống let nhưng không thay đổi được giá trị
*/

function getTotal(a, b) {
  const total = a + b;
  //   total = 10;
  console.log(total);
}

getTotal(1, 2);

const users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

users.name = "Hoàng An F8";

console.log(users);
