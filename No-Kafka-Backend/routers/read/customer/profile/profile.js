const express=require('express');
const router = express.Router();


const Address=require('./../../../../mysqlModels/CustomerAddress');
const Cards=require('./../../../../mysqlModels/Card');
const Customer = require('./../../../../mysqlModels/Customer');


router.get('/:id',async(req,res)=>{

    const id=req.params.id;
    try {
        const customer = await Customer.findOne({
            where: {
                id: id
            },include: [{ model: Address, as: 'customerAddresses'},{model:Cards,as:'cards'}]
        });
        if (customer === null) {
            return res.status(404).send("User not found!");
        }
        return res.status(200).send(customer);
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
   
})


router.get('/',async (req,res)=>{
    try {
        const customers = await Customer.findAll({include: [{ all: true, nested: false }]
        });
        return res.status(200).send(customers);
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
})

module.exports=router;