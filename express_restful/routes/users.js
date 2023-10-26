var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

/* GET users listing. */

router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.put("/:id", UserController.updatePut);
router.patch("/:id", UserController.updatePatch);
router.delete("/:id", UserController.delete);

module.exports = router;
