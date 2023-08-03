//Callback Function

var getA = function (func) {
  setTimeout(function () {
    console.log(`Function A`);
    func();
  }, 5000);
};

var getBB = function () {
  console.log(`Function B`);
};

var getC = function (msg) {
  console.log(`function C ${msg}`);
};

var handleGetC = function () {
  getC("F8");
  //console.log(`handleGetC`);
};

//getA(handleGetC); //getA chạy => handlegetC chạy => getC chạy
getA(function () {
  console.log(`Học lập trình tại F8`);
  getC(`F8`);
});

/*
- Để hàm getB() chạy sau khi hàm getA() hoàn thành => Đưa hàm getB() vào trong hàm getA()
- Nếu hàm getB đổi tên => Sửa lại getA()
Giải pháp: Gọi hàm getB trong hàm getA thông qua tham số (Tham số này sẽ nhận vào 1 hàm)
*/
