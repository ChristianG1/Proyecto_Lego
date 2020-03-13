const express = require('express');
const StarWars = require('../models/starWars');
const router = express.Router();

router.get('/',async(req, res)=>{ 
    const starWars = await StarWars.find();
    res.send(starWars);
})

router.post('/',async(req, res)=>{ 
    const starWar = new StarWars({ 
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description,
        noPieces: req.body.noPieces, 
        age: req.body.age
    })
    const result = await starWar.save(); 
    res.status(201).send(result);
})

module.exports = router;