var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    AdminId: {type: Number, required: true},
    AdminUserName: {type: String, required: true, max: 100},
    AdminPass: {type: String, required: true, max: 255}
});

module.exports = mongoose.model('Admin', AdminSchema);