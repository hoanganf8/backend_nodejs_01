var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json()); //Nhận Content-Type: application/json
/*
{
  "name": "Hoàng An",
  "email": "hoangan.web@gmail.com"
}
*/
app.use(express.urlencoded({ extended: false })); //Nhận Content-Type: application/x-www-urlendcoded
// => name=Hoàng+An&email=hoangan.web@gmail.com
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
  res.json({ error: "Không tìm thấy" });
});

module.exports = app;
