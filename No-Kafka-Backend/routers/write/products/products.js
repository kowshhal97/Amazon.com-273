const express = require('express');
const router = express.Router();
const Seller = require('../../../mysqlModels/Seller');
const Product = require('../../../mysqlModels/Product');



router.post('/', async (req,res) => {
    const sellerId = req.body.sellerId;
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
            description: req.body.description,
            sellerId: req.body.sellerId,
            categoryId: req.body.categoryId
        })
        return res.status(201).send(product);
    } catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!');
    }
})

router.put('/:id', (req, res) => {
    try {
        
    } catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error!');
    }
   
})

router.delete('/:id',(req,res)=>{
    
})



module.exports = router;