var express = require("express");
var router = express.Router();
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/lay-user", async (req, res) => {
  // const user = await User.findOne({
  //   where: {
  //     id: 1,
  //   },
  // });

  // // console.log(user);
  // const phone = await user.getDienthoai();
  // console.log(phone.phone_number);

  const phone = await Phone.findOne({
    where: {
      phone_number: "0123456789",
    },
  });

  const user = await phone.getUser();
  console.log(user);

  res.send("<h1>Lấy user</h1>");
});

module.exports = router;
