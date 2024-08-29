const mongoose=require("mongoose")
require("dotenv").config()

// const mongoURL="mongodb://localhost:27017/hotels"
const mongoURL=process.env.MONGODB_URL

mongoose.connect(mongoURL)

const db=mongoose.connection

db.on("connected",()=>{
    console.log("connect to mongodb")
})

db.on("error",(err)=>{
    console.log("mongodb error",err)
})

db.on("disconnected",()=>{
    console.log("disconnect to mongodb")
})

module.exports=db;




