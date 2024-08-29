const mongoose=require("mongoose")

const mongoURL="mongodb://localhost:27017/hotels"

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




