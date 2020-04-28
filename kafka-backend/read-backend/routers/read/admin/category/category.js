const express=require('express');
const router = express.Router();
const Category = require('../../../../mysqlModels/Category');



router.get('/', async (req, res) => {
    req.body.path = 'getAllCategoryHandler'
    kafka.make_request('admin-category-read', req.body, (err, results) => {
 
        console.log(results)
         res.status(results.status).send(JSON.parse(results.data));
    
      });
    // try {
    //     const categories = await Category.findAll();
    //     return res.status(200).send(categories);
    // } catch (err) {
    //     console.log(err);
    //     return res.status(500).send('Internal Servre Error!')
    // }
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