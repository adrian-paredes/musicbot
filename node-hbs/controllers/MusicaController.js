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
        conn.query('SELECT * FROM musica WHERE LOWER(genero)="Rock" AND LOWER(emocion) = "Feliz"', (err, musica)=>{
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
   const sql = 'SELECT * FROM musica WHERE LOWER(genero) = "${rock}"'
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
    const sql = 'SELECT * FROM musica WHERE LOWER(emocion) = "felicidad"'
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
    const sql = `SELECT * FROM musica WHERE LOWER(genero) = "${gen}" AND LOWER(emocion) = "felicidad"`
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
    const sql = 'SELECT * FROM musica WHERE LOWER(emocion)="tristeza"'
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
    const sql = 'SELECT * FROM musica WHERE LOWER(emocion) ="enojo"'
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
    const sql = 'SELECT * FROM musica WHERE LOWER(emocion)="sorpresa"'
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
    const sql = `SELECT * FROM musica WHERE LOWER(genero) = "${gen}" AND LOWER(emocion) = "tristeza"`
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
    const sql = `SELECT * FROM musica WHERE LOWER(genero) = "${gen}" AND LOWER(emocion) = "sorpresa"`
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
    const sql = `SELECT * FROM musica WHERE LOWER(genero) = "${gen}" AND LOWER(emocion) = "enojo"`
     req.getConnection((err,conn)=>{
         //const { rock } = conn.params;
         conn.query(sql, (err, musica)=>{
             if (err){
                 res.json(err);
             }
             //console.log("the gen is")
             console.log(gen);
             console.log(musica);
             
             res.render('../views/musica/playlist',{
                 data: musica
             });
 
         });
     })
 };

module.exports = musicaController;