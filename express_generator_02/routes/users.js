var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/find/:id", (req, res) => {
  res.send("Lấy thông tin user: " + req.params.id);
});

module.exports = router;
