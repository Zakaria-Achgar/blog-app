const express = require('express');
const router = express.Router();
const { genSalt, hash } = require("bcryptjs");
const User = require('../models/User');


router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    try {
        const user = await User.create({ 
            email, 
            password: hashedPassword
        })
        return res.status(201).json({ user });
    } catch(err) {
    console.log(err);
        res.json({ message: err.message })
    }
})

module.exports = router;