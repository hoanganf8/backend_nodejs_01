const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    res.render("auth/login", { pageTitle: "Đăng nhập" });
  },

  handleLogin: async (req, res) => {
    res.send("Handle Login");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký" });
  },

  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;

    const salt = 10;

    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
      //Insert name, email, password (hash) vào DB => Hoàn thiện phần đăng ký
    });

    res.send("Handle Register");
  },
};

/*
Quy trình xử lý đăng nhập dùng bcrypt

Bước 1: Lấy email, password từ Form
Bước 2: Từ email lấy ra passwordHash trong Database
Bước 3: Dùng hàm compare của bcrypt để so sánh password từ form và hash trong Database

=> TH1: Khớp => Set session để đăng nhập
=> TH2: Không khớp => Thông báo lỗi
*/
