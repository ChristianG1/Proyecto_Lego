const mongoose = require('mongoose');

const architectureSchema = new mongoose.Schema({ 
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
    age:{type: Number}, 
})

const Architecture = mongoose.model('architecture', architectureSchema);
module.exports = Architecture;