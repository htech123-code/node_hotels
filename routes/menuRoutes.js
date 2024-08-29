const express=require("express")
const router=express.Router()
const MenuItem=require("../models/MenuItem")


// post method to add a menu item
router.post("/",async(req,res)=>{
    try {
        const data=req.body
        const newMenu=new MenuItem(data)
        const response=await newMenu.save()
        console.log("Data Saved",response)
        res.status(200).json(response)
    } catch (error) {
        console.log("menu error is",error)
        res.status(500).json({"error":"internal Server Error"})
    }
})

router.get("/",async(req,res)=>{
    try {
        const data=await MenuItem.find()
        console.log("Data Fetched")
        res.status(200).json(data)
    } catch (error) {
        console.log("menu item error is",error)
            res.status(500).json({"error":"internal Server Error"})
    }
})

router.get("/:taste",async(req,res)=>{
    try {
        const tasteType=req.params.taste
        if(tasteType=="Spicy" || tasteType=="Sweet" || tasteType=="Sour"){
                const response=await MenuItem.find({taste:tasteType})
                console.log("response")
                res.status(200).json(response)
        }else{
            res.status(404).json({error:"Invalid tasteType"})
        }
    } catch (error) {
        console.log("menu item taste error is",error)
            res.status(500).json({"error":"internal Server Error"})
    }
})

module.exports=router


