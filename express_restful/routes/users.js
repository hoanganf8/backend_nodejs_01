var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);

module.exports = router;
