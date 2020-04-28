const Votes = require('../mysqlModels/votes');
const Product = require('../mysqlModels/Product');

getAllProductHandler = (msg, callback) => {

}

getProductByIdHandler = (msg, callback) => {
    
}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getAllProductHandler') {
        delete msg.path
        getAllProductHandler(msg, callback)

    }
    if (msg.path === "getProductByIdHandler") {
        delete msg.path
        getProductByIdHandler(msg, callback)
    }
};

exports.handle_request = handle_request;