const express=require('express');
const router = express.Router();
const kafka=require('./../../../../kafka/client')
router.get('/:id', async (req,res) => {
    req.body.id = req.params.id;
    req.body.path = 'getCustomerProfileById'
    kafka.make_request('customer-profile-read', req.body, (err, results) => {
  
        console.log(results)
        res.status(results.status).send(JSON.parse(results.data));
  
      });
})


router.get('/', async (req,res) => {
    req.body.path = 'getAllCustomerProfile'
    kafka.make_request('customer-profile-read', req.body, (err, results) => {
  
        console.log(results)
        res.status(results.status).send(JSON.parse(results.data));
  
      });
    
})

module.exports=router;