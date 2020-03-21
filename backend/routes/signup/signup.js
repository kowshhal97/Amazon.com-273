const express=require('express');
const router = express.Router();
const kafka=require('./../../kafka/client')

router.get('/',(req,res)=>{
    res.send("SIGNUP API is working!")
})
router.post('/',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})



module.exports=router;