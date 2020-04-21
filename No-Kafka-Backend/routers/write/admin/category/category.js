const express=require('express');
const router = express.Router();
const Category = require('../../../../mysqlModels/Category');


router.post('/', async (req, res) => {
    try {
        const category = await Category.create({categoryName: req.body.categoryName});
        return res.status(201).send(category);   
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

router.put('/:id',(req, res)=>{
    
})




module.exports=router;