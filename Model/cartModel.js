const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({

    name : {
        type : String,
        required : [true,'name required'],
        enum : ['A','B','C','D']
    },
    price : {
        type : Number,
        required : [true,'price required']
    }

},{versionKey:false});


module.exports = mongoose.model('Product',productSchema,'Product');