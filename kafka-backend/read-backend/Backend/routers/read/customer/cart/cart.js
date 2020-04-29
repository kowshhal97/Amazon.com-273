const express = require('express');
const router = express.Router();

const kafka=require('./../../../../kafka/client')

router.get('/:userId', async (req, res) => {
    req.body.userId = req.params.userId;
    req.body.path = 'getCartHandler'
    kafka.make_request('customer-cart-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });

})

module.exports = router;