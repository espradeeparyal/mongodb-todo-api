var mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:28028/TodoApp');

module.exports = {mongoose};