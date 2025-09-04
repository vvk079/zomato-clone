const mongoose =require('mongoose');


const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:String,
});

module.exports= mongoose.model("user",userSchema);