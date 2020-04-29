const Customer = require('../mysqlModels/Customer')
const Card = require('../mysqlModels/Card')

addCardHandler = async (msg, callback) => {
    const {name,cardNumber,expirationDate,cvv} = msg
    const id = msg.userId;
    try {
        const user = await Customer.findOne({
            where: {
                id: msg.userId
            }
        });
        if (user === null) {
            return res.status(404).send("User not found!");
        }
        else {
            const newCard=await Card.create({
                customerId:id,
                cardNumber:cardNumber,
                expirationDate:expirationDate,
                cvv:cvv,
                name:name,
            })
        return res.status(200).send(newCard);
        }
        
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

updateCardHandler = async (msg, callback) => {
    const {name,cardNumber,expirationDate,cvv} = msg
    const id = msg.cardId;
    try {
        const card = await Card.findOne({
            where: {
                id:id
            }
        });
        if ( card=== null) {
            return res.status(404).send("Card not found!");
        }
        else {
            const card=await Card.update({
                customerId:id,
                cardNumber:cardNumber,
                expirationDate:expirationDate,
                cvv:cvv,
                name:name,
            },{where:{id:id}})

        return res.status(200).send(card);
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

deleteCardHandler = async (msg, callback) => {
    const id=msg.cardId;
    try {
        await Card.destroy({
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

function handle_request(msg, callback) {
    if (msg.path === 'addCardHandler') {
      delete msg.path
      addCardHandler(msg, callback)
    }
    if (msg.path === 'updateCardHandler') {
      delete msg.path
      updateCardHandler(msg, callback)
    }
    if (msg.path === 'deleteCardHandler') {
        delete msg.path
        deleteCardHandler(msg, callback)
    }
  };
  
  exports.handle_request = handle_request;