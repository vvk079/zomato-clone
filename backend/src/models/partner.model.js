const mongoose = require('mongoose')

const foodpartnerSchema = new mongoose.Schema({
    Restaurantname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    customerServed:{
        type:String,
        required:true
    },
    
    

})

const foodpartner = mongoose.model("foodpartner",foodpartnerSchema);
module.exports=foodpartner;