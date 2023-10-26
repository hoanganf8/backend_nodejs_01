var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);

module.exports = router;
