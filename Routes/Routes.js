const express= require('express')
const router=express.Router();
const User=require('../Model/UserModel')
const {register,login} =require ('../Controller/Api')

router.post('/register',register)


 router.post('/login',login)



module.exports=router