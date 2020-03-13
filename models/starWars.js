const mongoose = require('mongoose');

const starWarsSchema = mongoose.Schema({
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
const StarWars = mongoose.model('StarWars', starWarsSchema);
module.exports = StarWars;