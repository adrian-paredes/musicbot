<<<<<<< HEAD
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
router.get('/Admin/save', admin.save)


=======
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
router.get('/Admin/save', admin.save)


>>>>>>> 4cca5f9f100f6f0cfb3cad4bb0c118dc2ac6aac7
module.exports = router;