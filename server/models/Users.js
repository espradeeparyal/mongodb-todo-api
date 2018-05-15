var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var Users = new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        minlength : 1
    }
});
module.exports = {Users}; 