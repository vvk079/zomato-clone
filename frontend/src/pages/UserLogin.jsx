import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        { email, password },
        { withCredentials: true }
      );

      console.log(res.data); // check backend response
      navigate("/user/profile"); // redirect after login
    } catch (err) {
      console.error(err);
      alert("Login failed, check your credentials");
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <p>Enter your email and password to securely access your account</p>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email address" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <div className="form-footer">
        New here? <Link to="/user/register">Register</Link>
      </div>

      <div className="switch-link">
        Switch: <Link to="/user/login">User</Link> ·{" "}
        <Link to="/login/food-partner">Food partner</Link>
      </div>
      <NavBar/>
      
     
    </div>
  );
};

export default UserLogin;
