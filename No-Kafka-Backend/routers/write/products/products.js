const express=require('express');
const router = express.Router();
const Seller = require('../../../mysqlModels/Seller');
const Product = require('../../../mysqlModels/Product');



router.post('/', async (req,res)=>{
    const sellerId = req.body.id;
    try {
        const seller = await Seller.findOne({
            where: {
                id: sellerId
            }
        })
        if(seller === null) {
            return res.status(404).send('User not found!');
        }
        const product = await Product.create({
            productName: req.body.productName,
            sellerName: req.body.sellerName,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description
        })
        return res.status(200).send(product);
    } catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!');
    }
})

router.put('/:id',(req,res)=>{
   
})

router.delete('/:id',(req,res)=>{
    
})



module.exports=router;