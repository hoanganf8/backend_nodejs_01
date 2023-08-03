// console.log(__dirname);
// console.log(__filename);

const http = require("http"); //Hỗ trợ giao thức http

const fs = require("fs"); //Xử lý file

const home = require("./modules/home");

// console.log(home.index());

const hostname = "localhost"; //Địa chỉ ip của server, hoặc hostname
//Mặc định trên máy tính cá nhân là: 127.0.01
//Hostname mặc định trên máy tính cá nhân là localhost
const port = 3001; //Cổng

const router = {
  "/": "home",
  "/gioi-thieu": "about",
  "/san-pham": "products",
};

const server = http.createServer((req, res) => {
  //req => request => Tiếp nhận các yêu cầu từ phía client gửi lên

  //res => response => Trả về từ phía server
  res.statusCode = 200; //Status Code
  res.setHeader("Content-Type", "text/html; charset=utf-8"); //Header

  let pathView = "home";

  const path = req.url;

  if (path === "/") {
    home.index(req, res);
  }

  // res.end();

  // if (router[path] !== undefined) {
  //   pathView = router[path];
  // } else {
  //   pathView = "404";
  // }

  // fs.readFile(`views/${pathView}.html`, "utf8", (err, data) => {
  //   // console.log(err);
  //   res.end(data); //Response Message Body
  // });
});

//Lắng nghe port và hostname => Nếu thành công thì mới truy cập được
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
