const express = require('express');
const router = express.Router();
const foodcontroller = require("../controller/food.controller.js");
const authMiddleware= require("../middleware/auth.middleware.js");
const multer = require('multer');


const upload = multer({
    storage:multer.memoryStorage(),
})

router.post("/",    upload.single("video"),
authMiddleware.authfoodPartnerMiddleWare,
      foodcontroller.createfood);


// get 
router.get("/",
    foodcontroller.getfooditeams,
)      

// GET a single food partner/store by ID
router.get("/:id", foodcontroller.getfoodpartnerById);

// user routes 


module.exports=router
