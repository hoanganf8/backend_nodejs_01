// Định nghĩa hàm
// function getMessage() {
//   //Nội dùng hàm
//   console.log("Xin chào F8");
// }

// function setMessage() {
//   //Nội dung hàm
//   console.log(`Khóa học Back-End NodeJS`);
// }

// //Gọi hàm
// getMessage();
// setMessage();

function getMessage(msg, type = "success") {
  //Nội dùng hàm
  //   console.log(`Xin chào F8 ${msg}`);
  //   console.log(`Type = ${type}`);
  //return msg;
  //console.log(`F8`);
}

// getMessage("Hoàng An");

// var msgValue = "Hoàng An F8";
// getMessage(msgValue);

//console.log(`Xin chào, sau đây là kết quả ${getMessage("Hoàng An F8")}`);

function getTotal(a, b = 0) {
  if (b !== 0) {
    return a + b;
  }

  //return `Không tính được`
  return;
}

// var total = getTotal(10, 20) + 50;

console.log(`Total = ${getTotal(5)}`);
