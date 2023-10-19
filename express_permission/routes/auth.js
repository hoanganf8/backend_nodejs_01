const passport = require("passport");

const AuthController = require("../controllers/AuthController");
const GuestMiddleware = require("../middlewares/GuestMiddleware");

var express = require("express");
var router = express.Router();

router.get("/login", GuestMiddleware, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    successRedirect: "/",
  }),
);

module.exports = router;
