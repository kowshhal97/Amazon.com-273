const Customer = require('../mysqlModels/Customer');
const Address = require('../mysqlModels/CustomerAddress');
const Cards = require('../mysqlModels/Card');

getCustomerProfileById = (msg, callback) => {

}

getAllCustomerProfile = (msg, callback) => {
    
}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getCustomerProfileById') {
        delete msg.path
        getCustomerProfileById(msg, callback)

    }
    if (msg.path === "getAllCustomerProfile") {
        delete msg.path
        getAllCustomerProfile(msg, callback)
    }
};

exports.handle_request = handle_request;