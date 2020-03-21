const express=require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})

module.exports=router;