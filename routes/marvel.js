const express = require('express');
const Marvel = require('../models/marvel');
const router = express.Router();

router.get('/',async(req, res)=>{ 
    const marvels = await Marvel.find();
    res.send(marvels);
})

router.post('/',async(req, res)=>{ 
    const marvel = new Marvel({ 
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description,
        noPieces: req.body.noPieces, 
        age: req.body.age
    })
    const result = await marvel.save(); 
    res.status(201).send(result);
})

module.exports = router;