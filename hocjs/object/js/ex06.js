var User = function () {
  this.name = "Hoàng An";
};

var Customer = function () {
  this.name = "Dương Nguyễn";
};

var user = new Customer();

console.log(user.constructor.name);

var products = [
  false,
  {
    name: "Nồi cơm điện 2",
    price: 100000,
  },
  null,
  ["Sản phẩm 1"],
  {
    name: "Nồi cơm điện",
    price: 20000,
  },
  {
    name: "Tủ Lạnh",
    price: 50000,
  },
  {
    name: "Bếp Gas",
    price: 30000,
  },
  function () {
    console.log(1);
  },
];

var result = {};

products.forEach(function (product) {
  if (
    typeof product === "object" &&
    !Array.isArray(product) &&
    product !== null
  ) {
    console.log(product);
    if (!Object.keys(result).length) {
      result = product;
    } else {
      //Tìm max
      if (result.price < product.price) {
        result = product;
      }
    }
  }
});
console.log(`Kết quả:`);
console.log(result);
