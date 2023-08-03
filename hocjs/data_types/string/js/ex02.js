var email = `hoangan.web@gmail.com`;

//Yêu cầu: Cắt ra username của email
console.log(email.slice(0, email.indexOf("@")));

var password = `HANGANa@F8`;

//=> Kiểm tra độ mạnh yếu mật khẩu (Không dùng Regex)

/*
- Độ dài: >=8 ký tự
- Có ít nhất 1 chữ Hoa
- Có ít nhất 1 chữ thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*

Gợi ý: 
- Hàm xử lý chuỗi
- Vòng lặp, câu lệnh if
- Dùng kỹ thuật đặt cờ hiệu
*/

var checkLength = false,
  checkUpper = false,
  checkLower = false,
  checkNumber = false,
  checkSymbol = false;

//Kiểm tra độ dài
if (password.length >= 8) {
  checkLength = true;

  var number = "0123456789";

  var symbol = "!@#$%^&*";

  //Đọc ký tự trong mảng

  //var lowerNumber = 0;

  for (var index = 0; index < password.length; index++) {
    var char = password.charAt(index);

    if (number.includes(char)) {
      checkNumber = true;
    }

    if (symbol.includes(char)) {
      checkSymbol = true;
    }

    // if (char >= "A" && char <= "Z") {
    //   checkUpper = true;
    // }

    // if (char >= "a" && char <= "z") {
    //   checkLower = true;
    // }

    if (symbol.indexOf(char) === -1 && number.indexOf(char) === -1) {
      if (char == char.toUpperCase()) {
        checkUpper = true;
      }
      if (char == char.toLowerCase()) {
        checkLower = true;
        // lowerNumber++;
      }
    }
  }
}

//console.log(checkUpper, checkLower);

if (checkLength && checkNumber && checkSymbol && checkUpper && checkLower) {
  console.log(`Mật khẩu mạnh`);
} else {
  console.log(`Mật khẩu yếu`);
}

function isUpperCase(name) {
  return name === name.toUpperCase();
}

console.log(isUpperCase("TẠ HOÀNG An"));
