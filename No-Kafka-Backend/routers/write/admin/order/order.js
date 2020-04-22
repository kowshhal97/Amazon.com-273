const express=require('express');
const router = express.Router();
const Order = require('../../../../mongoModels/orders');


router.put('/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
        if(!order) {
            return res.status(404).send('Order not found!');
        }
        return res.status(200).send(order);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})


module.exports = router;