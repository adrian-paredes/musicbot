var mongoose = require('mongoose');
var Musica = require("../models/Musica");

var musicaController = {};

musicaController.list = function(req, res){
    
    Musica.find({}).exec(function(err, canciones){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/musica/inicio', {canciones: canciones, titulo:'Inicio'} );
        
    });
    
};

musicaController.getanimo = function(req, res){
    res.render('../views/musica/animo');
};

musicaController.playlist = function(req, res){
    res.render('../views/musica/playlist');
};

module.exports = musicaController;