const Order = require('../mongoModels/orders');

getAllOrderHandler = (msg, callback) => {

}


function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getAllOrderHandler') {
        delete msg.path
        getAllOrderHandler(msg, callback)

    }
};

exports.handle_request = handle_request;