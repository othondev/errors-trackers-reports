var mongoose = require('mongoose');

var Schema = {
    system:{
        type:String,
        required: true
    },
    statusCode:{
        type:Number
    },
    message: {
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
}

module.exports = mongoose.model('Error', Schema);

