const Votes = require('../mysqlModels/votes');
const Customer = require('../mysqlModels/Customer');

getVotesByCustomerId = (msg, callback) => {

}

getVotesByProductId = (msg, callback) => {
    
}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getVotesByCustomerId') {
        delete msg.path
        getVotesByCustomerId(msg, callback)

    }
    if (msg.path === "getVotesByProductId") {
        delete msg.path
        getVotesByProductId(msg, callback)
    }
};

exports.handle_request = handle_request;