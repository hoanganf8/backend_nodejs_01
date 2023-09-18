var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");

const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);

module.exports = router;
