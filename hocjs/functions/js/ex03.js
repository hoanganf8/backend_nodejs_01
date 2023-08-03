//Rest Parameters

var getTotal = function (msg, isShow = true, ...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i]; //tenbienmang[chiso]
  }

  if (isShow) {
    return `${msg}${total}`;
  }

  return total;
};

var result = getTotal("Kết quả = ", true, 1, 3, 5, 7, 9);

console.log(result);

var getMax = function (...args) {
  //Viết code xử lý tìm giá trị lớn nhất
  //Gán max = số đầu tiên
  if (args.length) {
    var max = args[0];
    for (var i = 1; i < args.length; i++) {
      if (max < args[i]) {
        max = args[i];
      }
    }
    //Kỹ thuật đặt lính canh
    return max;
  }
};

//=> Trả về giá trị lớn nhất

var max = getMax(5, 10, 20, 4);

console.log(`Giá trị lớn nhất = ${max}`);
