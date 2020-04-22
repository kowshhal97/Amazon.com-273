const express=require('express');
const router = express.Router();
const Sale = require('../../../../mongoModels/sales');


router.get('/', async (req, res) => {
    try {
        const sellers = await Sale.find({}).sort({sales: -1}).limit(5);
        return res.status(200).send(sellers);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})


module.exports=router;