const express=require('express');
const router = express.Router();
const kafka= require('./../../kafka/client')


router.get('/:id',(req,res)=>{
   
})

router.put('/:id',(req,res)=>{
    
})

router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;