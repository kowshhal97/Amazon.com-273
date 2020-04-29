const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    req.body.path = 'getAllProductHandler';
    kafka.make_request('products-read', req.body, (err, results) => {
  
        console.log(results)
        res.status(results.status).send(JSON.parse(results.data));
  
      });
})

router.get('/:id', async (req, res) => {
    req.body.id = req.params.id;
    req.body.path = 'getProductByIdHandler'
    kafka.make_request('products-read', req.body, (err, results) => {
  
        console.log(results)
        res.status(results.status).send(JSON.parse(results.data));
  
      });

})


module.exports = router;