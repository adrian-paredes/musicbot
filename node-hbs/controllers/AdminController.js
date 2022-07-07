var mongoose = require('mongoose');
var Admin = require("../models/Admin");

var adminController = {};

adminController.log = function(req, res){
    res.render('../views/Admin/login');
    
};

module.exports = adminController;