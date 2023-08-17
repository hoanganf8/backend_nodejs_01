module.exports = (req, res, next) => {
  const isAuth = false;
  if (!isAuth) {
    return res.redirect("/");
  }

  next();
};
