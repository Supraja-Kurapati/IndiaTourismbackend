const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const secretKey="Tourism"
const saltRound=10;

const {databasename}=require('../Config/db')
const userdetails=databasename.collection("userdetails")

const register = async (req,res)=>{
    data=req.body
    console.log(data);

    data.password=bcrypt.hashSync(data.password,saltRound)

    const acc=  await userdetails.findOne({email:data.email})

    if(acc){
        return res.send({msg:"Email Already Exist"});
    }
const insertdata=await userdetails.insertOne(data)

const token=jwt.sign({user:data.email},secretKey)
res.send({msg:"user Registered successfully",token:token,insertdata:insertdata})
}

const login=async(req,res)=>{
    data=req.body
    console.log(data)
    const acc=await userdetails.findOne({email:data.email})
    if(acc){
         const login=bcrypt.compareSync(data.password,acc.password)

    
    if(login){
        const token=jwt.sign({user:data.email},secretKey,{expiresIn:'3d'})
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