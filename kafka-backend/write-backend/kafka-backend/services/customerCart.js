const Customer = require('../mysqlModels/Customer')
const Cart = require('../mysqlModels/Cart')
const Product = require('../mysqlModels/Product')

addCartHandler = async (msg, callback) => {
    const { quantity,flag } = msg
    const customerId = msg.userId
    const productId = msg.productId
    try {
        const user = await Customer.findOne({
            where: {
                id: customerId
            }
        });
        if (user === null) {
            return res.sendStatus(404);
        }
        else {
            const product = await Product.findOne({
                where: {
                    id: productId
                }
            });
            if (product === null) {
                return res.sendStatus(404);
            }
            else {
                const newCart = await Cart.create({
                    quantity: quantity,
                    customerId: customerId,
                    productId: productId,
                    flag:flag
                })
                return res.status(200).send(newCart);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

deleteCartHandler = async (msg, callback) => {
    const id = msg.id;
    try {
        const result = await Cart.destroy({
            where: {
                customerId: id
            }
        })
        return res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

updateCartHandler = async (msg, callback) => {
    const { quantity,flag } = msg
    const id = msg.id;
    try {
        const cart = await Cart.findOne({
            where: {
                customerId: id
            }
        });
        if (cart === null) {
            return res.sendStatus(404);
        }
        else {
            const updatedCart = await Cart.update({
                quantity: quantity,
                flag:flag
            }, { where: { customerId: id } })
            return res.status(200).send(updatedCart);
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

function handle_request(msg, callback) {
    if (msg.path === 'addCartHandler') {
      delete msg.path
      addCartHandler(msg, callback)
    }
    if (msg.path === 'deleteCartHandler') {
      delete msg.path
      deleteCartHandler(msg, callback)
    }
    if (msg.path === 'updateCartHandler') {
        delete msg.path
        updateCartHandler(msg, callback)
      }

  };
  
  exports.handle_request = handle_request;