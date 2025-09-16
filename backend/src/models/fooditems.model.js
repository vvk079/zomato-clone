const mongoose = require("mongoose");
const foodpartner = require("./partner.model");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    videos: { type: [String], required: true }, // ✅ array of strings
    discription: { type: String },
    price:{type:String},
    foodpartner: { type: mongoose.Schema.Types.ObjectId, ref: "foodpartner" },

})

const foodModel = mongoose.model("foodModel",foodSchema);
module.exports=foodModel;