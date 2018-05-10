//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:28028/TodoApp',(err,client) => {
    if(err){
        return console.log('Error in connection',err);
    }
    console.log('connected to DB'); 
    const db = client.db('TodoApp'); 
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5af3cdfe928a350e63e33326')
    },{
        $set : {
            name : 'Hari'
        },
        $inc : {
            age : +1
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