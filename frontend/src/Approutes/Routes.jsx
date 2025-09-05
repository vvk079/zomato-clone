import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";
import Home from "../pages/general/home";
import FoodPartnerhome from "../pages/general/FoodPartnerhome"
import Createfood from "../pages/food/Createfood";
import ReelsPage from "../pages/reel/ReelsPage";
const Approutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/register/food-partner" element={<FoodPartnerRegister />} />
        <Route path="/login/food-partner" element={<FoodPartnerLogin />} />
        <Route path="/reels" element={<ReelsPage/>} />
        <Route path="/createfood" element={<Createfood/>} />
            </Routes>
        </Router>
    )

}


export default Approutes