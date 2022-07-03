var express = require('express');
var router = express.Router();

var musica = require('../controllers/MusicaController');

router.get('/', musica.list);
router.get('/animo', musica.getanimo);
router.get('/playlist', musica.playlist);
router.get('/playlistHappy', musica.getHappy);
router.get('/playlistHappy/:gen', musica.getHappyGenere);
router.get('/playlistSad', musica.getSad);
router.get('/playlistSurprise', musica.getSurprise);
router.get('/playlistAngry', musica.getAngry);
//router.get('/playlist', musica.getRock);


module.exports = router;