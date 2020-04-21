const express=require('express');
const router = express.Router();
const Category = require('../../../../mysqlModels/Category');



router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        return res.status(200).send(categories);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Servre Error!')
    }
})

router.get('/:id',(req,res)=>{
    
})



module.exports=router;