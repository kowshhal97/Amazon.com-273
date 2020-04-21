const express=require('express');
const router = express.Router();
const Product=require('./../../../mysqlModels/Product');


router.get('/',async (req,res)=>{
    try {
        const products = await Product.findAll();
        return res.status(200).send(products);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
})

router.get('/:sellerId',async(req,res)=>{
    const id = req.params.sellerId;
  try {
    const products = await Seller.findAll({
      where: {
        sellerId: id,
      },
    });
    if (products === null) {
      return res.status(404).send('User not found!');
    }
    return res.status(200).send(products);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internal Server Error!');
  }
})



module.exports=router;