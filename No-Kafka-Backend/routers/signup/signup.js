const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("SIGNUP API is working!")
})



router.post('/',(req,res)=>{
    //signup code
})



module.exports=router;