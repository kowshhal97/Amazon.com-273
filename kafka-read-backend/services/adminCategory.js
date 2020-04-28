const Category = require('../mysqlModels/Category');

getAllCategoryHandler = (msg, callback) => {

}

getCategoryByIdHandler = (msg, callback) => {

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'getAllCategoryHandler') {
        delete msg.path
        getAllCategoryHandler(msg, callback)

    }
    if (msg.path === "getCategoryByIdHandler") {
        delete msg.path
        getCategoryByIdHandler(msg, callback)
    }
};

exports.handle_request = handle_request;