const express=require('express')
const app=express();
const router=require('./Routes/Routes')

const cors=require('cors')
const {connection}=require('./Config/db')

app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/pages',router)



app.listen(5031,()=>{
    connection();
    console.log("Server Running on 5031");
})