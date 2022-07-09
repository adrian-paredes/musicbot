var mongoose = require('mongoose');
var Admin = require("../models/Admin");

var adminController = {};

adminController.log = function(req, res){
    res.render('../views/Admin/login');
    
};

adminController.ind = function(req, res){
    res.render('../views/Admin/index')

};

adminController.playlist = function(req, res){
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM musica', (err, musica)=>{
            if (err){
                res.json(err);
            }
            console.log(musica);
            res.render('../views/Admin/playlist',{
                data: musica
            });

        });
    })
    
};

adminController.auth=function(req,res)
{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM aadmin WHERE AdminUserName = ?', [data.AdminUserName],(err,userdata)=>{
            if(userdata.length>0){
                console.log('hello');
                res.redirect('../Admin/index');
            }else{
                res.render('../views/Admin/login',{error:'Error:user not found!'});
                console.log('Error');
            }
        });
    });
}

adminController.show = function(req, res){
    res.render('../views/Admin/show');    
};

adminController.create = function(req, res){
    res.render('../views/Admin/create');
};

adminController.save = function(req, res){
    
};

                              
module.exports = adminController;