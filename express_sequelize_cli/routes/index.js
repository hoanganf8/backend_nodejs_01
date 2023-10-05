const nodemailer = require("nodemailer");

var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/open", function (req, res) {
  fs.writeFileSync("data.txt", "ok");
  res.sendFile(path.join(__dirname, "../public", "tracking.png"));
});

router.get("/send-mail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  //Đọc template
  const mailTemplatePath =
    path.dirname(__dirname) + "/views/mail/active_user.html";
  let mailTemplate = fs.readFileSync(mailTemplatePath).toString();

  const user = {
    name: "Hoàng An F8",
    email: "hoangan@fullstack.edu.vn",
  };

  const linkActive = "https://fullstack.edu.vn/active";

  mailTemplate = mailTemplate
    .replaceAll("{{name}}", user.name)
    .replaceAll("{{link}}", linkActive);
  const info = await transporter.sendMail({
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>`, // sender address
    to: user.email, // list of receivers
    subject: "Kích hoạt tài khoản tại F8", // Subject line
    html: mailTemplate,
  });
  console.log(info);

  res.send("Test email");
});

router.get("/get-tracking", async (req, res) => {
  const response = await fetch(`https://srdl4z-8001.csb.app/get-tracking`);
  const data = await response.text();
  res.send(data);
});

module.exports = router;

//Chú ý khi gửi email hàng loạt => Đưa vào hàng đợi (Queue)

//Đăng ký tài khoản => Validate => Insert vào Db => Gửi email => Thông báo cho user
