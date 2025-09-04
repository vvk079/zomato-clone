const mongoose = require('mongoose');

function connect(){
    
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to db :) ")
    })
    .catch((err)=>{
        console.log("cconnection failed ",err)

    })
}

module.exports=connect;