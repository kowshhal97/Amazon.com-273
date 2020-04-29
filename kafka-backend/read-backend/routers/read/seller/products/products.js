const express=require('express');
const router = express.Router();


router.get('/:id', async (req,res) => {
    req.body.id = req.params.id;
    req.body.path = 'getSellerProductHandler'
    kafka.make_request('seller-products-read', req.body, (err, results) => {
  
        console.log(results)
        res.status(results.status).send(JSON.parse(results.data));
  
      });
    
})

module.exports=router;