const Product = require('../mysqlModels/Product');

getSellerProductHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getSellerProductHandler') {
        delete msg.path
        getSellerProductHandler(msg, callback)

    }
};

exports.handle_request = handle_request;