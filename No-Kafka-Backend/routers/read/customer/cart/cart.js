
const express = require('express');
const router = express.Router();

const Cart = require('./../../../../mysqlModels/Cart')
const Product = require('./../../../../mysqlModels/Product')


router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ where: { customerId: req.params.userId} });

        const product = await Product.findOne({
            where:{
                id:req.params.id
            },include: [{ model:ProductImages,as:'productImages'}]});

        var output={...cart,...product}
        return res.status(200).send(output);
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
})

module.exports = router;