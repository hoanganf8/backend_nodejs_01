const nodemailer = require("nodemailer");
class SendMail {
  constructor(job) {
    this.job = job;
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
      to: this.job.email, // list of receivers
      subject: `Xin chào: ${job.name}`, // Subject line
      html: `Xin chào bạn ${job.name}, tôi đang test email`,
    });
  };
}

module.exports = SendMail;
