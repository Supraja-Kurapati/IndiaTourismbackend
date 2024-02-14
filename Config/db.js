// const mongoose=require('mongoose')

// const connectDb= async()=>{
//     try{
//         await mongoose.connect('mongodb://127.0.0.1:27017/Tourism')
//         console.log("Connected to Database");
//     }
//     catch(err){
//         console.error(err,"DB Connection error");
//     }
// }

// module.exports=connectDb

const {MongoClient} =require('mongodb')

const client=new MongoClient("mongodb+srv://SuprajaKurapati:Suppu63098@cluster0.udurvsr.mongodb.net/?retryWrites=true&w=majority")
const connection=async()=>{
    try{
        await client.connect()
console.log("Connected to database from db.js");
    }
    catch(err){
        console.log(err,"Error in connecting DB");
    }
}

const databasename=client.db("Tourism")
module.exports={connection,databasename}

