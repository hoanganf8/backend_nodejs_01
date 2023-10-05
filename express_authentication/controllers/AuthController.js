const bcrypt = require("bcrypt");
const model = require("../models/index");

const User = model.User;

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    res.render("auth/login", { pageTitle: "Đăng nhập", msg, msgType });
  },

  handleLogin: async (req, res) => {
    res.redirect("/");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký" });
  },

  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;

    const salt = 10;
    bcrypt.hash(password, salt, async function (err, hash) {
      //Insert name, email, password (hash) vào DB => Hoàn thiện phần đăng ký

      const data = await User.create({
        name,
        email,
        password: hash,
      });

      if (data) {
        req.flash("msg", "Đăng ký tài khoản thành công");
        res.redirect("/auth/login");
        return;
      }

      req.flash("msg", "Vui lòng kiểm tra lại thông tin");
      res.redirect("/auth/register");
    });

    return;
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
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
