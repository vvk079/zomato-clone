import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import  axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
   const email=e.target.email.value;
   
   
   const password=e.target.password.value;

   await axios.post("http://localhost:3000/api/auth/user/login",
    {
      email,
      password
    },{
      withCredentials:true
    });

    navigate("/reels")

  }

  
  
  return (
    <div className="form-container">
      <h2>User Login</h2>
       <div className="switch-link">
        Switch: <Link to="/user/login">User</Link> ·{" "}
        <Link to="/login/food-partner">Food partner</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" >Login</button>
      </form>

      <div className="form-footer">
        New here? <Link to="/user/register">Register</Link>
      </div>

     
    </div>
  );
};

export default UserLogin;
