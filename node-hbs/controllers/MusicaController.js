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
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM musica', (err, musica)=>{
            if (err){
                res.json(err);
            }
            console.log(musica);
            res.render('../views/musica/playlist',{
                data: musica
            });

        });
    })
};

musicaController.playlistRockFeliz = function(req, res){
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM musica WHERE Genero="Rock" AND Animo = "Feliz"', (err, musica)=>{
            if (err){
                res.json(err);
            }
            console.log(musica);
            res.render('../views/musica/playlist',{
                data: musica
            });

        });
    })
};

musicaController.getRock = function(req, res){
   const {rock} = req.params; 
   const sql = `SELECT * FROM musica WHERE Genero = "${rock}"`
    req.getConnection((err,conn)=>{
        //const { rock } = conn.params;
        conn.query(sql, (err, musica)=>{
            if (err){
                res.json(err);
            }
            console.log(musica);
            res.render('../views/musica/playlist',{
                data: musica
            });

        });
    })
};
module.exports = musicaController;