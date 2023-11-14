module.exports = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  //Nếu user đã login --> check token
  next();
};
