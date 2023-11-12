const apiAuth = `http://localhost:3000/api/auth/status`;
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const currentUrl = req.protocol + "://" + req.get("host") + req.path;
  let authCode = "";
  if (req.query.cookie) {
    req.session.auth_code = req.query.cookie;
  }

  authCode = req.session.auth_code;

  const response = await fetch(apiAuth, {
    method: "POST",
    headers: {
      Cookie: "connect.sid=" + authCode,
    },
  });
  let msg;
  let user = null;
  if (response.ok) {
    const data = await response.json();
    user = data.user;
    msg = `Đã đăng nhập`;
  } else {
    msg = `Chưa đăng nhập`;
  }
  const loginUrl = `http://localhost:3000/auth/login?redirect=${currentUrl}`;
  const logoutUrl = `http://localhost:3000/api/auth/logout?redirect=${currentUrl}`;
  res.render("index", { title: "Express", msg, user, loginUrl, logoutUrl });
});

module.exports = router;
