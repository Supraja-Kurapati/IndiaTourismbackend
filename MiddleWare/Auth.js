const jwt=require('jsonwebtoken')

const secretKey="Tourism"

const auth=(req,res,next)=>{
    const data=req.headers["authorization"]
    console.log(data,"token")
const token=data.split(' ')[1]
console.log(token)
    if(token){
        jwt.verify(token,secretKey,(err,decoded)=>{
           if(err){
            return res.status(401).send({error:"Error in accessing Token"})
        }
        if(decoded){
            return next()
        }
        else{
          //  return res.send("User is not Authorised")
          return res.status(403).send({ error: "User is not authorized" });
        }
        })
       
    }
    else{
        //return res.send({msg:"Email not Registered"}) 
        return res.status(400).send({ msg: "Email not registered" });   
    }
 
}

module.exports=auth