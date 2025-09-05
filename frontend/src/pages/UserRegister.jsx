import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
   // to navigate into another pages 
  const navigate = useNavigate();

  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
     // this is used to save data from frontend to backend
    await axios.post("http://localhost:3000/api/auth/user/register"
      ,{fullname,
        email,
        password
     },{
      // to save cookies from backend
      withCredentials:true
     })

     navigate("/reels")
    
    
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Create your account</h2>
        <p>Join to explore and enjoy delicious meals.</p>
        <div className="switch-link">
        Switch: <Link to="/user/register">User</Link> ·{" "}
        <Link to="/register/food-partner">Food partner</Link>
      </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="full Name" required />
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <button type="submit">Register</button>
      </form>

      <div className="form-footer">
        Already have an account? <Link to="/user/login">Login</Link>
      </div>

      
    </div>
  );
};

export default UserRegister;
