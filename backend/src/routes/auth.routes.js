const express = require('express')
const router =express.Router();
const authcontroller = require("../controller/auth.controller.js")


router.post("/user/register",authcontroller.registeruser);
router.post("/user/login",authcontroller.loginUser);
router.post("/user/logout",authcontroller.logoutUser);
router.post("/register/food-partner",authcontroller.registerPartner);
router.get("/logout/food-partner",authcontroller.logoutpartner);
router.post("/login/food-partner",authcontroller.loginfoodpartner);

module.exports=router;
