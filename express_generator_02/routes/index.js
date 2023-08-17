var express = require("express");
var router = express.Router();

const HomeController = require("../controllers/HomeController");
const adminMiddleware = require("../middlewares/adminMiddleware");

/* GET home page. */
router.get("/", HomeController.index);

router.get("/bao-cao", HomeController.report);

module.exports = router;
