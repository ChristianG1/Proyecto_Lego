const mongoose = require('mongoose');

const express = require('express');
const Architecture = require('../models/architecture');
const router = express.Router();

router.get('/',async(req, res)=>{ 
    const architectures = await Architecture.find();
    res.send(architectures);
})

router.post('/',async(req, res)=>{ 
    const architecture = new Architecture({ 
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description,
        noPieces: req.body.noPieces, 
        age: req.body.age
    })
    const result = await architecture.save(); 
    res.status(201).send(result);
})

module.exports = router;