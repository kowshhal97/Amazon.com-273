const Order = require('../mongoModels/orders');

updateOrderHandler = async (msg, callback) => {
    const { orderStatus, orderUpdateItem, productId } = msg; 
    try {
        const order = await Order.findById({_id: msg.orderId})
        if(!order) {
            return res.status(404).send('Order not found!');
        }
        order.products.map((product) => {
            if(product.productId === productId) {
                if(orderStatus) {
                    product.orderStatus = orderStatus;
                }
                if(orderUpdateItem) {
                    const list = [orderUpdateItem, ...product.orderUpdates];
                    product.orderUpdates = list
                }
            }
        })
        await order.save();
        return res.status(200).send(order);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
}

function handle_request(msg, callback) {
    if (msg.path === 'updateOrderHandler') {
      delete msg.path
      updateOrderHandler(msg, callback)
    }

  };
  
  exports.handle_request = handle_request;