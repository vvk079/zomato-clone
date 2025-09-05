import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FoodPartnerLogin = () => {

  const navigate = useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
   const email=e.target.email.value;
   
   
   const password=e.target.password.value;

   await axios.post("http://localhost:3000/api/auth/login/food-partner",
    {
      email,
      password
    },{
      withCredentials:true
    });

    navigate("/createfood")

  }

  return (
    <div className="form-container">
      {/* Header Section */}
      <div className="form-header">
        <h2>Welcome back</h2>
        <p>Login to manage your restaurant and serve more customers.</p>
        <div className="switch-link">
                Switch: <Link to="/user/login">User</Link> ·{" "}
                <Link to="/login/food-partner">Food partner</Link>
              </div>

      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password"name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      {/* Footer */}
      <div className="form-footer">
        New here? <Link to="/register/food-partner">Register</Link>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
