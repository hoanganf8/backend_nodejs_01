const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const model = require("../models/index");
const User = model.User;

const validateEmail = function (email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

module.exports = {
  index: async (req, res) => {
    const {
      query,
      order = "asc",
      sort = "createdAt",
      limit,
      page = 1,
    } = req.query;

    const options = {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
      order: [[sort, order]],
    };
    if (query) {
      options.where = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`,
            },
          },

          {
            email: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      };
    }
    if (limit && Number.isInteger(+limit)) {
      //Trả về tổng số bản ghi
      options.limit = +limit;
      //Tính offset
      const offset = (page - 1) * limit;
      options.offset = offset;
    }
    const { rows: users, count } = await User.findAndCountAll(options);

    const response = {
      status: "success",
      data: users,
      count,
    };
    res.json(response);
  },

  view: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "Not Found",
      });
      return;
    }

    res.json({
      status: "success",
      data: user,
    });
  },

  store: async (req, res) => {
    const { name, email } = req.body;

    const errors = {};
    if (!name) {
      errors.name = "Tên bắt buộc phải nhập";
    }
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    } else {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validation",
        errors,
      });
      res.status(400).json(response);
      return;
    }

    const user = await User.create({ name, email });
    if (user) {
      Object.assign(response, {
        status: "success",
        data: user,
      });
      res.status(201).json(response);
      return;
    }

    response = {
      status: "error",
      errorText: "Server Error",
    };
    res.status(500).json(response);
  },

  updatePut: async (req, res) => {
    const { id } = req.params;
    const { name = null, email, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "Not Found",
      });
      return;
    }
    //Validate
    const errors = {};
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    } else {
      const user = await User.findOne({
        where: {
          email,
          id: {
            [Op.not]: id,
          },
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }

    if (Object.keys(errors).length) {
      res.status(400).json({
        status: "error",
        errorText: "Validation",
        errors,
      });
      return;
    }

    const body = { name, email, password };

    if (password) {
      const hash = bcrypt.hashSync(password, 10);
      body.password = hash;
    }

    const status = await User.update(body, {
      where: {
        id,
      },
    });

    if (status) {
      res.json({ status: "success" });
      return;
    }

    res.status(500).json({
      status: "error",
      errorText: "Server Error",
    });
  },

  updatePatch: async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "Not Found",
      });
      return;
    }
    //Validate
    const errors = {};
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    } else {
      const user = await User.findOne({
        where: {
          email,
          id: {
            [Op.not]: id,
          },
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }

    if (Object.keys(errors).length) {
      res.status(400).json({
        status: "error",
        errorText: "Validation",
        errors,
      });
      return;
    }

    const body = req.body;

    if (password) {
      const hash = bcrypt.hashSync(password, 10);
      body.password = hash;
    }

    const status = await User.update(body, {
      where: {
        id,
      },
    });

    if (status) {
      res.json({ status: "success" });
      return;
    }

    res.status(500).json({
      status: "error",
      errorText: "Server Error",
    });
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "Not Found",
      });
      return;
    }

    const status = await User.destroy({
      where: { id },
    });

    if (status) {
      res.json({ status: "success" });
      return;
    }

    res.status(500).json({
      status: "error",
      errorText: "Server Error",
    });
  },
};
