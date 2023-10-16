var express = require("express");
var router = express.Router();
const hash = require("../utils/hash");
/* GET home page. */
router.get("/", function (req, res, next) {
  // hash.make("123456");
  res.render("index", { title: "Express" });
});

module.exports = router;
