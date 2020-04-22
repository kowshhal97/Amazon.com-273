const express=require('express');
const router = express.Router();
const Order = require('../../../../mongoModels/orders');


router.post('/:userId',async (req, res) => {
    const customerId = req.params.userId;
    try {
        const order = new Order({customerId, ...req.body})
        await order.save();
        res.status(201).send(order);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})


// router.put('/:orderId', async (req, res) => {
//     try {
//         const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
//         if(!order) {
//             return res.status(404).send('Order not found!');
//         }
//         return res.status(200).send(order);
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send('Internal Server Error!');
//     }
// })


module.exports=router;