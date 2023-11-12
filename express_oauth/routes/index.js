var express = require("express");
var md5 = require("md5");
var sha1 = require("sha1");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // const token = md5(new Date().getTime() + Math.random());
  // const token2 = sha1(new Date().getTime() + Math.random());
  // res.send(`${token} - ${token2}`);
  res.render("index", { user: req.user });
});

module.exports = router;
