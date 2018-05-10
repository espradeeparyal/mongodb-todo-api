//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:28028/TodoApp',(err,client) => {
    if(err){
        return console.log('Error in connection',err);
    }
    console.log('connected to DB'); 
    const db = client.db('TodoApp'); 
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5af3cbd05e18f10e221832c7')
    },{
        $set : {
            text : 'Something not to do'
        }
    },{
        returnOriginal : false
    }).then((updatedValue) => {
        console.log('updated value',updatedValue); 
    },(err) => {
        console.log('error occurred',err);
    });
    client.close(); 
});