var mongoose = require('mongoose');
var Admin = require("../models/Admin");

var adminController = {};

adminController.log = function(req, res){
    res.render('../views/Admin/login');
    
};

adminController.music = function(req, res){
    res.render('../views/Admin/music');
    
};

adminController.auth=function(req,res)
{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM admin WHERE AdminUserName = ?', [data.AdminUserName],(err,userdata)=>{
            if(userdata.length>0){
                console.log('hello');
                res.redirect('../Admin/music');
            }else{
                res.render('../views/Admin/login',{error:'Error:user not found!'});
                console.log('Error');
            }
        });
    });
}
                              
module.exports = adminController;