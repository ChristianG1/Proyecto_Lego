const mongoose = require('mongoose');

const dcSchema = new mongoose.Schema({ 
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
const Dc = mongoose.model('dc', dcSchema); 

module.exports = Dc;
