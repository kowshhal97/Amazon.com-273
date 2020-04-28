const Order = require('../mongoModels/orders');

getCustomerOrdersHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getCustomerOrdersHandler') {
        delete msg.path
        getCustomerOrdersHandler(msg, callback)

    }

};

exports.handle_request = handle_request;