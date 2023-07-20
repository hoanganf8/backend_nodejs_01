// var a = {
//   name: "Hoàng An",
//   age: 31,
// };

// // var b = a;
// //var b = Object.assign({}, a); //Copy Object
// var b = { ...a }; //Spread Operator
// b.name = "Hoàng An F8";

// console.log(a);
// console.log(b);

// var c = ["Hoàng An", 31];

// // var d = c;
// // var d = c.map(function (item) {
// //   return item;
// // });
// var d = [...c];
// d[0] = "Hoàng An F8";

// console.log(c);

//Thực hành: Viết 1 vòng lặp mới có tên là map2, cách hoạt động giống map

Array.prototype.map2 = function (callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    // console.log(callback(this[i], i));
    result[result.length] = callback(this[i], i);
  }

  return result;
};

// var users = ["Item 1", "Item 2", "Item 3"];

// var result = users.map2(function (user, index) {
//   //console.log(user, index);
//   return `<p>${user}</p>`;
// });

// console.log(result);

var customers = [
  {
    name: "Hoàng An",
    age: 30,
  },

  {
    name: "Hoàng An 2",
    age: 31,
  },

  {
    name: "Hoàng An 3",
    age: 32,
  },
];

var html = customers
  .map2(function (customer) {
    return `<div>
    <h2>${customer.name}</h2>
    <h3>${customer.age}</h3>
    </div>`;
  })
  .join("");

document.write(html);
