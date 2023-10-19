module.exports = {
  login: async (req, res) => {
    res.render("auth/login", { layout: "layouts/auth_layout" });
  },
};
