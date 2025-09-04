const mongoose = require("mongoose");
const foodpartner = require("./partner.model");

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    discription:{
        type:String,
    },
    foodpartner:{
        type:mongoose.mongoose.Schema.Types.ObjectId,
        ref:"foodpartner"
    }

})

const foodModel = mongoose.model("foodModel",foodSchema);
module.exports=foodModel;