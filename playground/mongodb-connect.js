//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  
var user = { name : 'Pradeep',age : 30, addresses : { first : 'kaushaltaar', second : 'Pokhara'}};
var {first:firstAddress} = user.addresses; 
console.log(firstAddress); 
MongoClient.connect('mongodb://localhost:28028/TodoApp',(err,client) => {
    if(err){
        return console.log('Error in connection',err);
    }
    console.log('connected to DB'); 
    const db = client.db('TodoApp'); 
    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed : false
    },(err,result) => {
        if(err){
            return console.log('error in insertion', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2)); 
    }); */
    db.collection('Users').insert({
        name: 'Pradeep',
        age: 34, 
        location: 'kathmandu'
    },(err,record) => {
        if(err){
            return console.log('unable to insert the record',err);
        }
        console.log(JSON.stringify(record.ops[0]._id.getTimestamp(),undefined,2)); 
    }); 
    client.close(); 
});