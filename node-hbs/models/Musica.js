var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicaSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    cantante: {type: String, required: true, max: 20},
    link: {type: String, required: true, max: 20},
});

module.exports = mongoose.model('Musica', MusicaSchema);