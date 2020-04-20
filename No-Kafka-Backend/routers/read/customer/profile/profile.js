const express=require('express');
const router = express.Router();
const comments=require('./comments/comments')
const votes=require('./votes/votes')
const address=require('./address/address')
const cards=require('./cards/cards')



router.use('/comments',comments);
router.use('/votes',votes);
router.use('/address',address);
router.use('/cards',cards);



router.get('/:id',(req,res)=>{
   
})


router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;