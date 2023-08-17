const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Xin chào F8</h1>");
  return;
});

app.get("/san-pham", (req, res) => {
  //   req.abc();
  return res.send("<h1>Sản phẩm</h1>");
});

app.listen(port, () => {
  console.log(`http://locahost:${port}`);
});
