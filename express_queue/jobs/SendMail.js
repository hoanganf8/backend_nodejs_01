const nodemailer = require("nodemailer");
class SendMail {
  constructor(data) {
    this.data = data;
    this.tries = 3;
  }

  handle = async () => {
    //Logic gửi email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "hoangan@fullstack.edu.vn",
        pass: "xawy cdle xyzo cyio",
      },
    });
    const info = await transporter.sendMail({
      from: `Hoàng An F8 <hoangan@fullstack.edu.vn>`, // sender address
      to: this.data.email, // list of receivers
      subject: `Xin chào: ${this.data.name}`, // Subject line
      html: `Xin chào bạn ${this.data.name}, tôi đang test email`,
    });
    console.log("Send Email Success");
  };
}

module.exports = SendMail;
