const Seller = require('../mysqlModels/Seller');

getSellerByIdHandler = (msg, callback) => {

}

getAllSellerHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getSellerByIdHandler') {
        delete msg.path
        getSellerByIdHandler(msg, callback)

    }
    if (msg.path === "getAllSellerHandler") {
        delete msg.path
        getAllSellerHandler(msg, callback)
    }
};

exports.handle_request = handle_request;