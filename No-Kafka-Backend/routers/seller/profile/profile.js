const express=require('express');
const router = express.Router();

const Customer=require('./../../../mysqlModels/Customer')


router.get('/:id',(req,res)=>{
   
})

router.put('/:id',(req,res)=>{
    
})

router.get('/',(req,res)=>{
    Customer.findAll().then();
    res.send('profile test working!')
})

module.exports=router;