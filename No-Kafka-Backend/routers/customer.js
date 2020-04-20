const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', (req, res) => {
    User.findAll().then(user => {
        console.log(user)
        res.send(user);
    }).catch(err => console.log(err));
})

module.exports = router;