const express=require("express")
const router=express.Router()
const Person=require("../models/Person")

router.post("/",async(req,res)=>{
    try {
        const data=req.body
        const newPerson=new Person(data)

        const response=await newPerson.save()
        console.log("data saved",response)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }

})

router.get("/",async(req,res)=>{
    try {
        const data=await Person.find()
        console.log("data",data)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }
})

router.get("/:workType",async(req,res)=>{
    try {
     const workType=req.params.workType
     if(workType=="chef" || workType=="waiter" || workType=="owner"){
         const response=await Person.find({work:workType})
         console.log("response fetched")
         res.status(200).json(response)
     }else{
         res.status(404).json({error:"Invalid WorkType"})
     }
    } catch (error) {
     console.log("person worktype error is",error)
     res.status(500).json({error:"internal Server Error"})
    }
 })

 router.put("/:id",async(req,res)=>{
    try {
        const personId=req.params.id
        const updatedPersonData=req.body 

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return updated document
            runValidators:true,//run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:"not finding person"})
        }
        console.log("updated")
        res.status(200).json(response)
    } catch (error) {
        console.log("person updated error is",error)
        res.status(500).json({error:"internal Server Error"})     
    }
 })

router.delete("/:id",async(req,res)=>{
   try {
    const personId=req.params.id
    const response=await Person.findByIdAndDelete(personId)
    if(!response){
        return res.status(404).json({error:"not finding person"})
    }
    console.log("deleted")
    res.status(200).json({message:"person deleted successfully"})
   } catch (error) {
    console.log("person deleted error is",error)
        res.status(500).json({error:"internal Server Error"})  
   }
})



 module.exports=router