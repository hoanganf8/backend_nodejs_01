var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");

/* Authentication Routes */
router.get("/login", AuthController.login);
router.post("/login", AuthController.handleLogin);
router.get("/register", AuthController.register);
router.post("/register", AuthController.handleRegister);

module.exports = router;
