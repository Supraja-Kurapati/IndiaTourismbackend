const express=require('express')
const app=express();

const cors=require('cors')
const connectDb=require('./Config/db')
const router=require('./Routes/Routes')

app.use(cors({
    origin:'*'
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('pages',router)



app.listen(5031,()=>{
    connectDb();
    console.log("Server Running on 5031");
})