const express=require('express');
const router = express.Router();
const Sale = require('../../../../mongoModels/sales');
const Purchase = require('../../../../mongoModels/customerPurchase');
const Order = require('../../../../mongoModels/orders');


router.get('/top/seller/', async (req, res) => {
    try {
        const sellers = await Sale.find({}).sort({sales: -1}).limit(5);
        return res.status(200).send(sellers);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

router.get('/top/customer/', async (req, res) => {
    try {
        const customers = await Purchase.find({}).sort({purchase: -1}).limit(5);
        return res.status(200).send(customers);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

router.get('/orderPerDay/', async (req, res) => {
    let day = new Date().toISOString().slice(0,10);
    console.log(day);
    try {
        const orders = await Order.find({orderDate: {$gte: day}}).limit(10);
        return res.status(200).send(orders.length);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

router.get('/top/products/', async (req, res) => {
    let topProducts = []
    try {
        const orders = await Order.find({})
        orders.map((order) => {
            order.products.map((product) => {

            })
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})


module.exports=router;