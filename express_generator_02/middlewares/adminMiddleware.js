module.exports = (req, res, next) => {
  //Logic lọc request
  const isAdmin = false;
  if (!isAdmin) {
    return res.redirect("/admin");
  }

  next();
  //Middleware
};
