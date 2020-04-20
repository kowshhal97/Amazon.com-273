const express=require('express');
const router = express.Router();
const comments=require('./comments/comments')
const votes=require('./votes/votes')




router.use('/comments',comments);
router.use('/votes',votes)



router.get('/:id',(req,res)=>{
   
})

router.put('/:id',(req,res)=>{
    
})

router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;