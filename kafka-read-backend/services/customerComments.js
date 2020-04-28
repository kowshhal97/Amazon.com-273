const Comments = require('../mysqlModels/Comments');
const Customer = require('../mysqlModels/Customer');

getCommentHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getCommentHandler') {
        delete msg.path
        getCommentHandler(msg, callback)

    }
   
};

exports.handle_request = handle_request;