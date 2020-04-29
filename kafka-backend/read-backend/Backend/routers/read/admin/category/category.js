const express=require('express');
const router = express.Router();

const kafka=require('./../../../../kafka/client')

router.get('/', async (req, res) => {
    req.body.path = 'getAllCategoryHandler'
    kafka.make_request('admin-category-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });

})

router.get('/:id', async (req, res) => {
    req.body.id = req.params.id;
    req.body.path = 'getCategoryByIdHandler'
    kafka.make_request('admin-category-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });
    
})


module.exports=router;