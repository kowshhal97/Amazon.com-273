const express=require('express');
const router = express.Router();

const category=require('./category/category')


router.use('/category',category)



module.exports=router;