module.exports = {
  login: (req, res) => {
    const { redirect } = req.query;
    res.render("auth/login", { redirect });
  },
};
