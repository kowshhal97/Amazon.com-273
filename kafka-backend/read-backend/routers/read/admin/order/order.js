const express=require('express');
const router = express.Router();

// Get all orders by Admin
router.get('/', async (req, res) => {
    req.body.path = 'getAllOrderHandler'
    kafka.make_request('admin-order-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });

})

module.exports = router;