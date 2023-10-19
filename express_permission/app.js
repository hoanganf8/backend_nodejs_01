var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var rolesRouter = require("./routes/roles");
var authRouter = require("./routes/auth");
const localPassport = require("./passports/localPassport");
const AuthMiddleware = require("./middlewares/AuthMiddleware");
const model = require("./models/index");
const User = model.User;

var app = express();

app.use(
  session({
    secret: "f8",
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findByPk(id);
  done(null, user);
});

passport.use("local", localPassport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.set("auth_layout", "layouts/auth_layout");
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use(AuthMiddleware);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
