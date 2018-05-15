var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var Todos = new Schema({
    text : {
        type : String,
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
});
var Todo = mongoose.model('todo',Todos);  
module.exports = {Todo}; 