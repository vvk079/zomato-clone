const foodpartnermodel= require("../models/partner.model");
const  userModel= require("../models/user.model");
const jwt = require('jsonwebtoken');



async function authfoodPartnerMiddleWare(req,res,next){

    const token = req.cookies.token;

    if(!token){
        return res.status(402).json({
            message:"please login first"
        })
    }

    try {
       const decoded= jwt.verify(token,process.env.JWT_SECRET);
       const foodpartner = await foodpartnermodel.findById(decoded.id);

       req.foodpartner=foodpartner;
       next();
        
    } catch (err) {
        return res.status(401).json({
            message:"invalid token"
        })
        
    }



    
}


async function authuserMiddleWare(req,res,next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(402).json({
            message:"please login first"
        })
    }

    try {
       const decoded= jwt.verify(token,process.env.JWT_SECRET);
       const user = await userModel.findById(decoded.id);

       req.user=user;
       next();
        
    } catch (err) {
        return res.status(401).json({
            message:"invalid token"
        })
        
    }   
}


module.exports={
    authfoodPartnerMiddleWare,
    authuserMiddleWare
}