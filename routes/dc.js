const express = require('express');
const Dc = require('../models/dc');
const router = express.Router();

router.get('/',async(req, res)=>{ 
    const dcs = await Dc.find();
    res.send(dcs);
})

router.post('/',async(req, res)=>{ 
    const dc = new Dc({ 
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description,
        noPieces: req.body.noPieces, 
        age: req.body.age
    })
    const result = await dc.save(); 
    res.status(201).send(result);
})

module.exports = router;