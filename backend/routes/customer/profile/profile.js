const express=require('express');
const router = express.Router();
const comments=require('./comments/comments')
const votes=require('./votes/votes')
const kafka= require('./../../../kafka/client')




router.use('/comments',comments);
router.use('/votes',votes)



router.get('/:id',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

router.put('/:id',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

router.get('/',(req,res)=>{
    res.send('profile test working!')
})

module.exports=router;