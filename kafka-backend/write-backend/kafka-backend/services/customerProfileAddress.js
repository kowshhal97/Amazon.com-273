const Customer=require('../mysqlModels/Customer')
const Address=require('../mysqlModels/CustomerAddress')

addAddressHandler = async (msg, callback) => {
    const {name,address1,address2,city,state,country,zipCode,phoneNumber} = msg
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
            const newAddress=await Address.create({
                customerId:id,
                name:name,
                address1:address1,
                address2:address2,
                city:city,
                state:state,
                country:country,
                zipCode:zipCode,
                phoneNumber:phoneNumber,
            })
        return res.status(200).send(newAddress);
        }
        
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

updateAddressHandler = async (msg, callback) => {
    const {name,address1,address2,city,state,country,zipCode,phoneNumber} = msg
    const id = msg.addressId;
    try {
        const address = await Address.findOne({
            where: {
                id:id
            }
        });
        if ( address=== null) {
            return res.status(404).send("Address not found!");
        }
        else {
            const newAddress=await Address.update({
                name:name,
                address1:address1,
                address2:address2,
                city:city,
                state:state,
                country:country,
                zipCode:zipCode,
                phoneNumber:phoneNumber,
            },{where:{id:id}})

        return res.status(200).send(newAddress);
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

deleteAddressHandler = async (msg, callback) => {
    const id = msg.addressId;
    try {
        const address=await Address.destroy({
            where:{
                id:id
            }
        })
        return res.status(200).send(address);
        }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
}

function handle_request(msg, callback) {
    if (msg.path === 'addAddressHandler') {
      delete msg.path
      addAddressHandler(msg, callback)
    }
    if (msg.path === 'updateAddressHandler') {
      delete msg.path
      updateAddressHandler(msg, callback)
    }
    if (msg.path === 'deleteAddressHandler') {
        delete msg.path
        deleteAddressHandler(msg, callback)
    }
  };
  
  exports.handle_request = handle_request;