const Customer = require('../mysqlModels/Customer')
const Comments = require('../mysqlModels/Comments')
const Product = require('../mysqlModels/Product')

addCommentHandler = async (msg, callback) => {
  const { comment } = msg
    const userId = msg.userId;
    const productId = msg.productId;
    try {
        const user = await Customer.findOne({
            where: {
                id: userId
            }
        });
        if (user === null) {
            return res.status(404).send("User not found!");
        }
        else {
            const product = await Product.findOne({
                where: {
                    id: productId
                }
            });
            if (product === null) {
                return res.status(404).send("product not found!");
            }
            else {
                const newComment = await Comments.create({
                    comment: comment,
                    customerId: userId,
                    productId: productId
                })
                return res.status(200).send(newComment);
            }
        }

    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

deleteCommentHandler = async (msg, callback) => {
  const id = msg.id;
  try {
      const result= Comments.destroy({
          where:{
              id:id
          }
      })
      return res.sendStatus(200);
      }
  catch (err) {
      console.log(err);
  }
  return res.status(500).send("Internal Server Error!");
}

updateCommentHandler = async (msg, callback) => {
  const { comment } = msg
  const id = msg.id;
  try {
      const comments = await Comments.findOne({
          where: {
              id: id
          }
      });
      if (comments === null) {
          return res.status(404).send("Comment not found!");
      }
      else {
          const updatedComment = await Comments.update({
              comment: comment,
          }, { where: { id: id } })

          return res.status(200).send(updatedComment);
      }
  }
  catch (err) {
      console.log(err);
  }
  return res.sendStatus(500);
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