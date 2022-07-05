var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicaSchema = new Schema({
    cancion_id: {type: Number, required: true},
    cancion_name: {type: String, required: true, max: 100},
    artista: {type: String, required: true, max: 100},
    link: {type: String, required: true, max: 200},
    emocion: {type: String, required: true, max: 20},
    genero: {type: String, required: true, max: 20}
});

module.exports = mongoose.model('Musica', MusicaSchema);