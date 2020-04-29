const Customer = require('../mysqlModels/Customer')
const Comments = require('../mysqlModels/Comments')
const Product = require('../mysqlModels/Product')

addCommentHandler = async (msg, callback) => {

}

deleteCommentHandler = async (msg, callback) => {
    
}

updateCommentHandler = async (msg, callback) => {
    
}

function handle_request(msg, callback) {
    if (msg.path === 'addCommentHandler') {
      delete msg.path
      addCommentHandler(msg, callback)
    }
    if (msg.path === 'deleteCommentHandler') {
      delete msg.path
      deleteCommentHandler(msg, callback)
    }
    if (msg.path === 'updateCommentHandler') {
        delete msg.path
        updateCommentHandler(msg, callback)
      }
  };
  
  exports.handle_request = handle_request;