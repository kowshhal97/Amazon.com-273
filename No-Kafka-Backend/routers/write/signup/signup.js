const express = require('express');
const router = express.Router();
const User = require('./../../../mysqlModels/User')



router.post('/', async (req, res) => {

    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType
        })
        return res.status(200).send(user);
    }
    catch (err) {
         console.log(err);
    }
    return res.status(500).send("Internal Server Error!");

})



module.exports = router;