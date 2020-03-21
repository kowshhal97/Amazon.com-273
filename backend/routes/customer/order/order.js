const express=require('express');
const router = express.Router();

const kafka= require('./../../../kafka/client')




router.post('/:id',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

router.get('/:id',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

router.get('/',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

module.exports=router;