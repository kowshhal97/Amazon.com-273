const express=require('express');
const router = express.Router();

const order=require('./order/order')
const profile = require('./profile/profile')

router.use('/profile',profile);
router.use('/orders',order)



module.exports=router;