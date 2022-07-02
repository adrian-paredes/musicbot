var express = require('express');
var router = express.Router();

var musica = require('../controllers/MusicaController');

router.get('/', musica.list);
router.get('/animo', musica.getanimo);
//router.get('/playlist', musica.playlist);
router.get('/playlist', musica.getRock);
router.get('/playlist/:rock', musica.getRock);
router.get('/playlist/:salsa', musica.getRock);

module.exports = router;