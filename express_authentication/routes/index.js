var express = require("express");
var router = express.Router();

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};
/* GET home page. */
router.get("/", isLogout, function (req, res, next) {
  res.render("index", { title: "Express", user: req.user });
});

module.exports = router;
