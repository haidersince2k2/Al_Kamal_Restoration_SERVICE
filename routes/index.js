var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("landingpage");
});
router.get("/painting", function (req, res, next) {
  res.render("painting");
});
router.get("/electrician", function (req, res, next) {
  res.render("electrician");
});
router.get("/plumber", function (req, res, next) {
  res.render("plumber");
});
router.get("/acservice", function (req, res, next) {
  res.render("accleaning");
});

module.exports = router;
