var express = require("express");
var router = express.Router();
const hash = require("../utils/hash");
const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;
/* GET home page. */
router.get("/", async function (req, res, next) {
  if (req.user) {
    const { id } = req.user;

    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Role,
      },
    });

    const roles = user.Roles;
    //Lấy tất cả permission của từng Role
    let permissions = await Promise.all(
      roles.map(async ({ id }) => {
        const role = await Role.findOne({
          where: { id },
          include: {
            model: Permission,
          },
        });

        return role.Permissions;
      }),
    );

    permissions = permissions.map((item) => {
      return item.map(({ value }) => value);
    });

    permissions = [...new Set(permissions.flat(Infinity))];
    console.log(permissions);
  }

  res.render("index", { title: "Express" });
});

module.exports = router;

/*
Viết middleware để check route và permission tương ứng
Viết hàm check quyền -> Ẩn/Hiện các button, menu tương ứng
*/
