
const express = require('express');
const router = express.Router();

const Cart = require('./../../../../mysqlModels/Cart')



router.get('/:id', async (req, res) => {
    try {
        const cart = await Cart.findOne({ where: { customerId: req.params.id } });
        return res.status(200).send(cart);
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
})

module.exports = router;