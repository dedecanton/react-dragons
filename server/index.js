/* eslint-disable */
require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const URL = process.env.API_URL;
console.log(URL);

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));



const rewriteFn = function (path, req) {
  return path.replace(`${process.env.REACT_APP_API_PATH}`, '/api/v1/dragon');
};


app.use(
  process.env.REACT_APP_API_PATH,
  createProxyMiddleware({
    target: URL,
    changeOrigin: true,
    pathRewrite: rewriteFn
  })
);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
