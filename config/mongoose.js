const { log } = require('console');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/project4');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log("db is not connected");
        return false;
    }
    console.log("db is start");
})

module.exports='db';