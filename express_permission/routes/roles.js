var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");

router.get("/", RoleController.index);
router.get("/add", RoleController.add);
router.post("/add", RoleController.handleAdd);

router.get("/edit/:id", RoleController.edit);
router.post("/edit/:id", RoleController.handleEdit);

module.exports = router;
