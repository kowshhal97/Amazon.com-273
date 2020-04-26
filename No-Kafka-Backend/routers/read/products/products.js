const express = require('express');
const router = express.Router();
const Product = require('./../../../mysqlModels/Product');
const Votes = require('./../../../mysqlModels/votes')

const sequelize = require('sequelize')


router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).send(products);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {

        const rating=await Votes.findAll({
            where: { productId: id },
            attributes: ['productId', [sequelize.fn('AVG',
                sequelize.col('rating')), 'ratingAvg']],
        });

        const product = await Product.findOne({
            where:{
                id:req.params.id
            }, include: [{ all: true, nested: false }]
        });
        product.rating=rating[0];
        return res.status(200).send(product);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }

})


module.exports = router;