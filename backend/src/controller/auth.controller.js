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

   const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" } // optional, 7 din tak valid
)

    res.cookie("token", token, {
  httpOnly: true,          // frontend JS access nahi kar sakta
  secure: process.env.NODE_ENV === "production", // prod me HTTPS required
  sameSite: "lax",         // CSRF attack se bachata hai
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din
})
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
   const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" } // optional, 7 din tak valid
)
    // cookie me set kar diya 
    res.cookie("token", token, {
  httpOnly: true,          // frontend JS access nahi kar sakta
  secure: process.env.NODE_ENV === "production", // prod me HTTPS required
  sameSite: "lax",         // CSRF attack se bachata hai
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din
})
    res.status(201).json({
        message:"login sucsessfuly :) "
    })

}

function logoutUser(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });
  res.status(200).json({ message: "loggedOut successfully" });
}

async function registerPartner(req,res){
    let {Restaurantname,email,password,customerServed}= req.body;

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
        password:hashed,
        customerServed
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