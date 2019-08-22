const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL + '/' + process.env.DATABASE_NAME,{useNewUrlParser:true});

var db = mongoose.connection;

db.once('open',console.log.bind(console,'DataBase Connected Successfully !!'));
db.on('error',console.error.bind(console,'Error in connection creation !!'));
db.on('disconnect',console.log.bind(console,'DataBase Disconnected Successfully !!'));
