const foodModel = require("../models/fooditems.model.js");
const uploadfile = require("../services/storage.js")
const {v4:uuid} = require("uuid")

async function createfood(req,res) {
    
    const fileuploadResult = await uploadfile(req.file.buffer,uuid())
    

    const fooditems = await foodModel.create({
        name:req.body.name,
        discription:req.body.discription,
        video:fileuploadResult.url,
        foodpartner:req.foodpartner._id
    })

    res.status(202).json({
        message:"created food item :)",
        food:fooditems
    })
    
}

async function getfooditeams(req,res) {
    const fooditems = await foodModel.find({})
    res.status(203).json({
        message:"fetched food iteams ",
        fooditems
    })
    
}

module.exports={
    createfood,getfooditeams
}