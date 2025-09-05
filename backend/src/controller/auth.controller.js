const usermodel=require("../models/user.model.js")
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const foodpartnermodel=require('../models/partner.model.js')

async function registeruser(req,res){

    let {fullname,email,password}= req.body;

    const alreadyuser = await usermodel.findOne({
        email
    })

    if(alreadyuser) {
        return res.status(400).json({
            message:"user is already registerd"
        })
    }

    const hashed = await bcrypt.hash(password,10)

   const user = await usermodel.create({
        fullname,
        email,
        password:hashed
    })

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"yeh.. registerd succesfully ! :)"
    })

}

async function loginUser(req,res){
    // body se data liya 
    let {email,password}=req.body;
    // user find kiya 
    const user =await usermodel.findOne({email});
    if(!user){
        return res.status(401).json({
            message:"user not existed"
        })
    }

    // compare the user with the db password and the body password 

    const isPasswordIsVaild = await bcrypt.compare(password,user.password);

    if(!isPasswordIsVaild){
        return res.status(401).json({
            message:"invalid password or email"
        })
    }
     // token genrate kiya 
    const token = jwt.sign({
        id:user._id,

    },process.env.JWT_SECRET);
    // cookie me set kar diya 
    res.cookie("token",token);
    res.status(201).json({
        message:"login sucsessfuly :) "
    })

}

function logoutUser(req,res){
    res.clearCookie("token")
    res.status(201).json({
        message:"loggedOut successfully"
    })

}

async function registerPartner(req,res){
    let {Restaurantname,email,password}= req.body;

    const alreadyuser = await foodpartnermodel.findOne({
        email
    })

    if(alreadyuser) {
        return res.status(400).json({
            message:"user is already registerd"
        })
    }

    const hashed = await bcrypt.hash(password,10)

   const user = await foodpartnermodel.create({
        Restaurantname,
        email,
        password:hashed
    })

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"yeh.. food partner registerd succesfully ! :)"
    })


    
}

async function loginfoodpartner(req,res){
    // body se data liya 
    let {email,password}=req.body;
    // user find kiya 
    const user =await foodpartnermodel.findOne({email});
    if(!user){
        return res.status(401).json({
            message:"user not existed"
        })
    }

    // compare the user with the db password and the body password 

    const isPasswordIsVaild = await bcrypt.compare(password,user.password);

    if(!isPasswordIsVaild){
        return res.status(401).json({
            message:"invalid password or email"
        })
    }
     // token genrate kiya 
    const token = jwt.sign({
        id:user._id,

    },process.env.JWT_SECRET);
    // cookie me set kar diya 
    res.cookie("token",token);
    res.status(201).json({
        message:"login sucsessfuly :) "
    })


    
}

function logoutpartner (req,res){
    res.clearCookie("token")
    res.status(202).json({
        message:"loggedOut successfully"
    })

}

module.exports={
    registeruser,
    loginUser,
    logoutUser,
    registerPartner,
    logoutpartner,loginfoodpartner
      
}