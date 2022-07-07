var mongoose = require('mongoose');
var Musica = require("../models/Musica");

var musicaController = {};

musicaController.list = function(req, res){
    res.render('../views/musica/inicio');
    
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

//Test1
musicaController.playlistRockFeliz = function(req, res){
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM musica WHERE genero="Rock" AND emocion = "Feliz"', (err, musica)=>{
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


//Test2
musicaController.getRock = function(req, res){
   const {rock} = req.params; 
   const sql = 'SELECT * FROM musica WHERE genero = "${rock}"'
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

musicaController.getHappy = function(req, res){
    const sql = 'SELECT * FROM musica WHERE emocion = "felicidad"'
     req.getConnection((err,conn)=>{
         conn.query(sql, (err, musica)=>{
             if (err){
                 res.json(err);
             }
             console.log(musica);
             res.render('../views/musica/playlistHappy',{
                 data: musica
             });
 
         });
     })
 };

 musicaController.getHappyGenere = function(req, res){
    const {gen} = req.params; 
    //console.log(rock);
    const sql = 'SELECT * FROM musica WHERE genero = "${gen}" AND emocion = "felicidad"'
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

 musicaController.getSad = function(req, res){
    const sql = 'SELECT * FROM musica WHERE emocion="tristeza"'
     req.getConnection((err,conn)=>{
         conn.query(sql, (err, musica)=>{
             if (err){
                 res.json(err);
             }
             console.log(musica);
             res.render('../views/musica/playlistSad',{
                 data: musica
             });
 
         });
     })
 };

 musicaController.getAngry = function(req, res){
    const sql = 'SELECT * FROM musica WHERE emocion ="enojo"'
     req.getConnection((err,conn)=>{
         conn.query(sql, (err, musica)=>{
             if (err){
                 res.json(err);
             }
             console.log(musica);
             res.render('../views/musica/playlistAngry',{
                 data: musica
             });
 
         });
     })
 };

 musicaController.getSurprise = function(req, res){
    const sql = 'SELECT * FROM musica WHERE emocion="sorpresa"'
     req.getConnection((err,conn)=>{
         conn.query(sql, (err, musica)=>{
             if (err){
                 res.json(err);
             }
             console.log(musica);
             res.render('../views/musica/playlistSurprise',{
                 data: musica
             });
 
         });
     })
 };

 musicaController.getSadGenere = function(req, res){
    const {gen} = req.params; 
    //console.log(rock);
    const sql = 'SELECT * FROM musica WHERE genero = "${gen}" AND emocion = "tristeza"'
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

 musicaController.getSurpriseGenere = function(req, res){
    const {gen} = req.params; 
    //console.log(rock);
    const sql = 'SELECT * FROM musica WHERE genero = "${gen}" AND emocion = "sorpresa"'
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

 musicaController.getAngryGenere = function(req, res){
    const {gen} = req.params; 
    //console.log(rock);
    const sql = 'SELECT * FROM musica WHERE genero = "${gen}" AND emocion = "enojo"'
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