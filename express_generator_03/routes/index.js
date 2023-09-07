var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // console.log(process.env); //Lấy danh sách các biến môi trường
  res.render("index", { title: "Express" });
});

module.exports = router;
