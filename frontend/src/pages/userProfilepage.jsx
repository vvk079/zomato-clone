import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/UserProfile.css";
import axios from "axios";
import NavBar from "../components/NavBar";


export default function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/profile", { withCredentials: true });
      console.log("Profile API response:", res.data); // 🔍 check what backend sends
      setUser(res.data);
    } catch (err) {
      console.error("Profile fetch error:", err);
    }
  };
  fetchUser();
}, []);

const handleHome = async () =>{
    navigate("/")
}



const handleLogout = async () => {
  try {
    await axios.post("http://localhost:3000/api/auth/user/logout", {}, 
        { withCredentials: true });
    navigate("/"); // logout ke baad redirect
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

  if (!user) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  return (
    <div className="profile-page">
     

      {/* Header */}
      <header className="header">
        <h2>{user.fullname}</h2>
        <p>{user.email}</p>
      </header>

      {/* Sections */}
      <main className="section-container">
        <div className="section-card" onClick={handleHome}><h3>Home</h3></div>
        <div className="section-card"onClick={() => navigate("/user/cart")} ><h3>Order / Cart</h3></div>
        <div className="section-card"><h3>Help</h3></div>
        <div className="section-card" onClick={()=>navigate("/user/payment")} ><h3>Payment Management</h3></div>
        
      </main>

      {/* Footer */}
      <footer className="footer">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
        
      </footer>
      <NavBar/>
    </div>
  );
}
