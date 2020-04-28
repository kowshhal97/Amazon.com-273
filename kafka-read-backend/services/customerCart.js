const Cart = require('../mysqlModels/Cart');
const Product = require('../mysqlModels/Product');
const ProductImages = require('../mysqlModels/productImages');

getCartHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getCartHandler') {
        delete msg.path
        getCartHandler(msg, callback)

    }
};

exports.handle_request = handle_request;