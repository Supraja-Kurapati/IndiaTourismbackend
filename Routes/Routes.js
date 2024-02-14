const express= require('express')
const router=express.Router();
const {register,login} =require ('../Controller/Api');
const auth = require('../MiddleWare/Auth');

router.post('/register',register)


 router.post('/login',login)

router.post('/TourOffers',auth,(req,res)=>{
    res.send({msg:"you can acces Tour Offers"})
})


router.post('/TourPackages',auth,(req,res)=>{
    res.send({msg:"you can acces Tour Packages"})
})

module.exports=router