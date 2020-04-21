const express=require('express');
const router = express.Router();
const comments=require('./comments/comments')
const votes=require('./votes/votes')

const Customer = require('./../../../../mysqlModels/Customer');



router.use('/comments',comments);
router.use('/votes',votes);




router.get('/:id',async(req,res)=>{

    const id=req.params.id;
    try {
        const customer = await Customer.findOne({
            where: {
                id: id
            },include: [{ all: true, nested: true }]
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


router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;