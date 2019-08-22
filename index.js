require('dotenv').config();
require('./connect.js');
const createError = require('http-errors');
const express = require('express');
var app = express();
var cartRoute = require('./Router/cartRoute.js');

// MIDDLEWARE TO PARSE JSON DATA
app.use(express.json());
// Routing
app.use('/cart',cartRoute);


// URL NOT FOUND MIDDLEWARE

app.use((req,res,next) => {

  var error =  new createError.NotFound();
  next(error);
});

// GLOBAL ERROR HANDLING MIDDLEWARE

app.use((err,req,res,next) => {

    var error = JSON.parse(JSON.stringify(err,['name','message','status']));
    res.status(error.status ? error.status : 500).send({
        status : error.status ? error.status : 500,
        success : false,
        error : error
    })
})


process.on('unhandeledRejection',(reason) => {

    console.error(reason);

});

var port = process.env.PORT ? process.env.PORT : 3005 ;
app.listen(port,console.log.bind(console,`Server is up on port ${port}`));
