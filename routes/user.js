const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/',async(req, res)=>{ 
    const users = await User.find();
    res.send(users);
})

router.post('/adduser',async(req, res)=>{ 
    const user = new User({ 
        name: req.body.name, 
        age: req.body.age, 
        email: req.body.email,
        password: req.body.password, 
    })
    const result = await user.save(); 
    res.status(201).send(result);
})

module.exports = router;