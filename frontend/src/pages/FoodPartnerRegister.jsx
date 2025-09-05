import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerRegister = () => {
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const Restaurantname = e.target.Restaurantname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
   await axios.post("http://localhost:3000/api/auth/register/food-partner",{
    Restaurantname,
    email,
    password
   },{
    withCredentials:true
   })

   navigate("/createfood")

  }


  return (
    <div className="form-container">
      {/* Header Section */}
      <div className="form-header">
        <h2>Create your account</h2>
        <p>Join to explore and enjoy delicious meals.</p>
        <div className="switch-link">
  Switch: <Link to="/user/register">User</Link> ·{" "}
  <Link to="/register/food-partner">Food partner</Link>
</div>

      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="Restaurantname" placeholder="Restaurant Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>

      {/* Footer */}
      <div className="form-footer">
        Already a partner? <Link to="/login/food-partner">Login</Link>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
