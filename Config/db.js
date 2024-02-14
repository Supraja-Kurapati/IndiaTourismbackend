const mongoose=require('mongoose')

const connectDb= async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Tourism')
        console.log("Connected to Database");
    }
    catch(err){
        console.error(err,"DB Connection error");
    }
}

module.exports=connectDb