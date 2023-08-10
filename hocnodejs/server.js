// console.log(__dirname);
// console.log(__filename);

const http = require("http"); //Hỗ trợ giao thức http
let url = require("url");

const fs = require("fs"); //Xử lý file
const home = require("./modules/home");
const products = require("./modules/products");
const upload = require("./modules/upload");
const auth = require("./modules/auth");
const Session = require("./core/Session");

const hostname = "localhost"; //Địa chỉ ip của server, hoặc hostname
//Mặc định trên máy tính cá nhân là: 127.0.01
//Hostname mặc định trên máy tính cá nhân là localhost
const port = 3001; //Cổng

const server = http.createServer((req, res) => {
  const session = new Session(req, res);

  session.start(); //Khởi tạo phiên làm việc mới

  //req => request => Tiếp nhận các yêu cầu từ phía client gửi lên

  //res => response => Trả về từ phía server
  res.statusCode = 200; //Status Code
  res.setHeader("Content-Type", "text/html; charset=utf-8"); //Header

  url = url.parse(req.url);

  const pattern = /\/*$/; //regex
  const pathname = url.pathname.replace(pattern, "");

  //Đọc file tĩnh trong thư mục public
  if (req.url.indexOf("public") !== -1) {
    const ext = req.url.split(".").slice(-1).join();
    const contentTypes = {
      css: "text/css",
      png: "image/png",
      jpg: "image/jpg",
      gif: "image/gif",
      js: "text/javascript",
    };

    res.setHeader("Content-Type", contentTypes[ext]);

    if (contentTypes[ext].includes("image/")) {
      fs.readFile("." + req.url, (err, content) => {
        res.end(content);
      });
    } else {
      fs.readFile("." + req.url, "utf8", (err, content) => {
        if (err?.errno === -4058) {
          res.setStatus(404);
          res.end();
        }

        res.end(content);
      });
    }
  }

  if (pathname === "") {
    home.index(req, res);
  } else if (pathname === "/san-pham") {
    products.index(req, res);
  } else if (pathname === "/san-pham/them") {
    products.add(req, res);
  } else if (pathname === "/upload") {
    if (req.method === "POST") {
      upload.handleUload(req, res);
    } else {
      upload.showForm(req, res);
    }
  } else if (pathname === "/xem-san-pham") {
    products.find(req, res);
  } else if (pathname === "/login") {
    auth.login(req, res);
  }
});

//Lắng nghe port và hostname => Nếu thành công thì mới truy cập được
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
