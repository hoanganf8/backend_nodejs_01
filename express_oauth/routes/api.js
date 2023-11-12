var express = require("express");
var router = express.Router();

router.post("/auth/status", (req, res) => {
  if (req.user) {
    res.json({
      status: "success",
      user: req.user,
    });
    return;
  }
  res.status(401).json({
    status: "error",
    message: "Unauthorize",
  });
});

router.get("/auth/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next();
    }
    if (req.query.redirect) {
      res.redirect(req.query.redirect);
      return;
    }
    res.redirect("/");
  });
});

module.exports = router;
