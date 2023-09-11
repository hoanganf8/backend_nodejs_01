var express = require("express");
var router = express.Router();

const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.index);

module.exports = router;
