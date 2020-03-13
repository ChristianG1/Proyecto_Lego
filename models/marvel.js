const mongoose = require('mongoose');

const marvelSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    price:{
        type: Number, 
        required: true 
    },
    description:{type: String}, 
    /*image:{
        type: String
    },*/ 
    noPieces:{
        type: Number
    }, 
    age:{type: Number}
})

const Marvel = mongoose.model('marvel', marvelSchema);

module.exports = Marvel;