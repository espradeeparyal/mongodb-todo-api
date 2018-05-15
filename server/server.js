var express = require('express'); 
var bodyParser = require('body-parser'); 

var {mongoose} = require('./db/mongoose.js'); 
var {Todo} = require('./models/Todos.js'); 
var {User} = require('./models/Users.js'); 

var app = express();

app.use(bodyParser.json()); 

app.post('/todos',(req,res) => {
    var todo = new Todo({
        text : req.body.text       
    });
    todo.save().then((doc) => {
        res.send(doc); 
    },(e) => {
        res.status(400).send(e); 
    }) 
});
app.listen(3010,() => {
    console.log('server started'); 
});