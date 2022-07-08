var express = require('express');
const adminController = require('../controllers/AdminController');
var router = express.Router();
var admin = require('../controllers/AdminController')

/* GET home page. */
router.get('/Admin/login', admin.log);
router.post('/Admin/login',admin.auth);
router.get('/Admin/music',admin.music);

module.exports = router;