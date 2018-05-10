//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:28028/TodoApp',(err,client) => {
    if(err){
        return console.log('Error in connection',err);
    }
    console.log('connected to DB'); 
    const db = client.db('TodoApp'); 
    db.collection('Todos').find().count().then((count) => {
        console.log(`total count : ${count}`); 
    },(err) => {
        console.log('error occurred',err);
    });
    client.close(); 
});