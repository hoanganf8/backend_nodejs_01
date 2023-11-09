var express = require("express");
var passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  }),
);

module.exports = router;
