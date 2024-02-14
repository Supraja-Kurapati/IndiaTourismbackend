const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const secretkey="Tourism"
const saltRound=10;

const userdetails=require('../Model/UserModel')

const register = async (req,res)=>{
    data=req.body
    console.log(data);

    data.password=bcrypt.hashSync(data.password,saltRound)

    const acc=  await userdetails.findOne({email:data.email})

    if(acc){
        return res.send({msg:"Email Already Exist"});
    }
const insertdata=await userdetails.create(data)

const token=jwt.sign({user:data.email},secretkey)
res.send({msg:"user Registered successfully",token:token,insertdata:insertdata})
}

const login=async(req,res)=>{
    data=req.body
    console.log(data)
    const acc=await userdetails.findOne({email:data.email})
    if(acc){
         const login=bcrypt.compareSync(data.password,acc.password)

    
    if(login){
        const token=jwt.sign({user:data.email},secretkey,{expiresIn:'3d'})
        console.log(login,"login");
     return res.send({msg:"Login Successful!",token:token})
    }
    else{
        return res.send({msg:"Password Incorrect"})
    }
}
else{
    return res.send({msg:"You Haven't Registered Yet"})
}


}

module.exports={register,login}