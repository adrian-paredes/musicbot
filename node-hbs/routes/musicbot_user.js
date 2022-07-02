var express = require('express');
var router = express.Router();

var musica = require('../controllers/MusicaController');

router.get('/', musica.list);
router.get('/animo', musica.getanimo);
router.get('/playlist', musica.playlist);

module.exports = router;