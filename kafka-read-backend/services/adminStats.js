const Sale = require('../mongoModels/sales');
const Purchase = require('../mongoModels/customerPurchase');

getTopSellerHandler = (msg, callback) => {

}

getTopCustomerHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getTopSellerHandler') {
        delete msg.path
        getTopSellerHandler(msg, callback)

    }
    if (msg.path === "getTopCustomerHandler") {
        delete msg.path
        getTopCustomerHandler(msg, callback)
    }
};

exports.handle_request = handle_request;