const express=require('express');
const router = express.Router();
const Order = require('../../../../mongoModels/orders');

router.get('/:sellerName', async (req, res) => {
    console.log(req.params.sellerName);
    const sellerName = req.params.sellerName;
    try {
        const orders = await Order.find().elemMatch("products", {sellerName: sellerName}).sort({orderDate: -1});
        console.log(orders);
        return res.status(200).send(orders);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
})


module.exports=router;