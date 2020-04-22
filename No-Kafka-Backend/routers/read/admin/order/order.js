const express=require('express');
const router = express.Router();
const Order = require('../../../../mongoModels/orders');



router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({});
        return res.status(200).send(orders);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!')
    }
})



module.exports = router;