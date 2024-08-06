var express = require("express");
var router = express.Router();
const productController = require("../app/controllers/ProductController");
/* GET users listing. */
router.get("/", productController.index);

module.exports = router;
