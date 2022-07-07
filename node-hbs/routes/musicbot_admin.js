var express = require('express');
var router = express.Router();
var admin = require('../controllers/AdminController')

/* GET home page. */
router.get('/Admin/login', admin.log);

module.exports = router;