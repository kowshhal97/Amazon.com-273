const express=require('express');
const router = express.Router();
const Order = require('../../../../mongoModels/orders');
const Sale = require('../../../../mongoModels/sales');
const Purchase = require('../../../../mongoModels/customerPurchase');

// Update order Status by Seller
router.put('/:orderId', async (req, res) => {
    
    const { totalPrice, orderStatus, orderUpdateItem, productId } = req.body; 
    try {
        const order = await Order.findById({_id: req.params.orderId})
        if(!order) {
            return res.status(404).send('Order not found!');
        }
        const {customerName, customerId} = order;
        order.products.map((product) => {
            if(product.productId === productId) {
                if(orderStatus) {
                    product.orderStatus = orderStatus;
                }
                if(orderUpdateItem) {
                    const list = [orderUpdateItem, ...product.orderUpdates];
                    product.orderUpdates = list
                }
                if(totalPrice) {
                    product.totalPrice = 0;
                    const sale = new Sale({sellerName: product.sellerName, sales: -1*product.totalPrice})
                    await sale.save();
                    const purchase = new Purchase({customerId: customerId, customerName: customerName, purchase: -1*product.totalPrice});
                    await purchase.save();
                }
            }
        })
        await order.save();
        return res.status(200).send(order);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

//Delete Order
//no need

/*router.delete('/:userId/:orderId/:productId', async (req, res) => {
    const {userId, orderId, productId} = req.params;
    try {
        const order = await Order.findOne({_id: orderId});
        if(order.customerId !== userId) {
            return res.status(400).send("No Authorization");
        }
        order.products.map((product) => {
            if(product.productId !== productId) {
                return product
            }
        })
        await order.save();
        return res.status(200).send("Order Cancelled with Success!")
    } catch(err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
})
*/

module.exports = router;