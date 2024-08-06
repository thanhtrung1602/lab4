var express = require('express');
var router = express.Router();
const userController = require('../app/controllers/UserController');
/* GET users listing. */
router.get('/', userController.index);

module.exports = router;
