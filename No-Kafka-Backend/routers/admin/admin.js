const express=require('express');
const router = express.Router();

const category=require('./category/category')
const stats=require('./stats/stats')

router.use('/stats',stats);
router.use('/category',category)



module.exports=router;