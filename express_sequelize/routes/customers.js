var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");

const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);

router.get("/edit/:id", CustomerController.edit);
router.post("/edit/:id", CustomerValidate(), CustomerController.update);

router.post("/destroy/:id", CustomerController.destroy);

module.exports = router;
