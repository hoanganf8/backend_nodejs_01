const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const cookie = require("cookie");

class Session {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    this.sessionId = null;
  }
  //Hàm khởi tạo session
  start = () => {
    //Tạo ra id
    const sessionId = uuidv4();

    //Tạo file lưu trữ sesion

    const cookies = cookie.parse(this.request?.headers?.cookie ?? "");

    if (!cookies.sessionId) {
      fs.writeFileSync("./logs/sessions/" + sessionId, "");
      //setCookie
      this.response.setHeader("Set-Cookie", "sessionId=" + sessionId);
    }
  };

  put = (key, value) => {
    const data = {};
    data[key] = value;

    const cookies = cookie.parse(this.request.headers.cookie);
    const sessionId = cookies.sessionId;

    fs.writeFileSync("./logs/sessions/" + sessionId, JSON.stringify(data));
  };

  get = (key) => {
    const cookies = cookie.parse(this.request.headers.cookie);
    const sessionId = cookies.sessionId;
    const data = fs.readFileSync("./logs/sessions/" + sessionId);
    if (data) {
      const dataObj = JSON.parse(data);
      return dataObj[key];
    }
  };
}

module.exports = Session;
