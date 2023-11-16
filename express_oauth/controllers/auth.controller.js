const csrf = require("../middlewares/csrf.middleware");

module.exports = {
  login: (req, res) => {
    const { redirect } = req.query;
    res.render("auth/login", { redirect });
  },

  register: (req, res) => {
    res.render("auth/register", { csrf });
  },
  handleRegister: (req, res) => {
    res.send("ok");
  },
};
