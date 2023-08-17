var express = require("express");
var router = express.Router();
var productRouter = require("./products");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.get("/", (req, res) => {
  res.send("<h1>Trang tổng quan</h1>");
});

//Thêm middleware tại đây
router.use(adminMiddleware);

router.get("/posts", (req, res) => {
  res.send("<h1>Danh sách bài viết</h1>");
});

router.get("/services", (req, res) => {
  res.send("<h1>Danh sách dịch vụ</h1>");
});

router.use("/products", productRouter);

module.exports = router;

//Luồng request
//Request => Auth Middleware => Admin Middleware => Controller
