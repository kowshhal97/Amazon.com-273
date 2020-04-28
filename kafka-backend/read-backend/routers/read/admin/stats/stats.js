const express=require('express');
const router = express.Router();

router.get('/top/seller/', async (req, res) => {
    req.body.path = 'getTopSellerHandler'
    kafka.make_request('admin-stats-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });

})

router.get('/top/customer/', async (req, res) => {
    req.body.path = 'getTopCustomerHandler'
    kafka.make_request('admin-stats-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });

})


module.exports=router;