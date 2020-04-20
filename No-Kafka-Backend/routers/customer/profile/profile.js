const express=require('express');
const router = express.Router();
const comments=require('./comments/comments')
const votes=require('./votes/votes')
<<<<<<< HEAD

=======
const address=require('./address/address')
const cards=require('./cards/cards')
>>>>>>> kowshhalDev



router.use('/comments',comments);
<<<<<<< HEAD
router.use('/votes',votes)
=======
router.use('/votes',votes);
router.use('/address',address);
router.use('/cards',cards);
>>>>>>> kowshhalDev



router.get('/:id',(req,res)=>{
   
})

router.put('/:id',(req,res)=>{
    
})

router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;