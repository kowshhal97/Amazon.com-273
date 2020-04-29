const Customer = require('../mysqlModels/Customer')
const Votes = require('../mysqlModels/votes')
const Product = require('../mysqlModels/Product')

addVoteHandler = async (msg, callback) => {
    const { rating } = msg
    const userId = msg.userId;
    const productId = msg.productId;
    try {
        const user = await Customer.findOne({
            where: {
                id: userId
            }
        });
        if (user === null) {
            return res.sendStatus(404);
        }
        else {
            const product = await Product.findOne({
                where: {
                    id: productId
                }
            });
            if (product === null) {
                return res.sendStatus(404);
            }
            else {
                const newVote = await Votes.create({
                    rating: rating,
                    customerId: userId,
                    productId: productId
                })
                return res.status(200).send(newVote);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

updateVoteHandler = async (msg, callback) => {
    const { rating } = msg
    const id = msg.id;
    try {
        const votes = await Votes.findOne({
            where: {
                id: id
            }
        });
        if (votes === null) {
            return res.sendStatus(404);
        }
        else {
            const updatedVote = await Votes.update({
                rating: rating,
            }, { where: { id: id } })
            return res.status(200).send(updatedVote);
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

deleteVoteHandler = async (msg, callback) => {
    const id = msg.id;
    try {
        const result = await Votes.destroy({
            where: {
                id: id
            }
        })
        return res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500);
}

function handle_request(msg, callback) {
    if (msg.path === 'addVoteHandler') {
      delete msg.path
      addVoteHandler(msg, callback)
    }
    if (msg.path === 'updateVoteHandler') {
      delete msg.path
      updateVoteHandler(msg, callback)
    }
    if (msg.path === 'deleteVoteHandler') {
        delete msg.path
        deleteVoteHandler(msg, callback)
    }
  };
  
  exports.handle_request = handle_request;