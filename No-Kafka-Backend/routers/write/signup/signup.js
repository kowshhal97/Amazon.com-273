const express = require('express');
const router = express.Router();
const User = require('./../../../mysqlModels/User');
const Customer = require('./../../../mysqlModels/Customer');
const Seller = require('./../../../mysqlModels/Seller');
const Admin = require('./../../../mysqlModels/Admin');

router.post('/', async (req, res) => {

    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType
        })
        if (user.userType === "customer") {
            Customer.create({
                name: req.body.name
            }).then(customer => {
                customer.setUser(user)
            });
        }
        else if (user.userType === "seller") {
            Seller.create({
                name: req.body.name
            }).then(seller => {
                seller.setUser(user)
            });
        }
        else {
            Admin.create({
                name: req.body.name
            }).then(admin => {
                admin.setUser(user)
            });
        }
        return res.status(200).send(user);
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");

})



module.exports = router;