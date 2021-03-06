var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");

const { createProxyMiddleware } = require("http-proxy-middleware");

var app = express();

const proxy = createProxyMiddleware({
  target: "https://segmentfault.com/",
  changeOrigin: true,
  logLevel: "debug",
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", proxy);

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
