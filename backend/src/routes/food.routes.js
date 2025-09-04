const express = require('express');
const router = express.Router();
const foodcontroller = require("../controller/food.controller.js");
const authMiddleware= require("../middleware/auth.middleware.js");
const multer = require('multer');


const upload = multer({
    storage:multer.memoryStorage(),
})

router.post("/",authMiddleware.authfoodPartnerMiddleWare,
    upload.single("video"),
      foodcontroller.createfood);


// get 
router.get("/",authMiddleware.authuserMiddleWare,
    foodcontroller.getfooditeams,
)      



module.exports=router
