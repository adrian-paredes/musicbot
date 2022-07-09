var express = require('express');
const adminController = require('../controllers/AdminController');
var router = express.Router();
var admin = require('../controllers/AdminController')

/* GET home page. */
router.get('/Admin/login', admin.log);
router.post('/Admin/login',admin.auth);
router.get('/Admin/playlist',admin.playlist);
router.get('/Admin/index', admin.ind);

router.get('/Admin/show/:id', admin.show)
router.get('/Admin/create', admin.create);
router.post('/Admin/save', admin.save);
router.get('/Admin/edit/:id',admin.edit)
router.post('/Admin/update/:id',admin.update)
router.get('/Admin/delete/:id',admin.delete)


module.exports = router;