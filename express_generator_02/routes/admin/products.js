var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Danh sách sản phẩm</h1>");
});

router.get("/add", (req, res) => {
  res.send("Thêm sản phẩm");
});

module.exports = router;
