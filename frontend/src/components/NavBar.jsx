import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import axios from "axios";

const NavBar = () => {
  const handleProfileClick = async () => {
    try {
      await axios.get("http://localhost:3000/api/user/profile", { withCredentials: true });
      window.location.href = "/user/profile";
    } catch {
      window.location.href = "/user/login";
    }
  };

  return (
    <div style={styles.nav}>
      <div style={styles.item} onClick={() => (window.location.href = "/")}>
        <AiFillHome size={28} />  {/* bigger size */}
        <p style={styles.text}>Home</p>
      </div>

      <div style={styles.item} onClick={handleProfileClick}>
        <BsPerson size={28} />   {/* bigger size */}
        <p style={styles.text}>Profile</p>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "75px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTop: "1px solid #e5e5e5",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
    zIndex: 1000,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#333",
  },
  text: {
    marginTop: "2px",
    fontSize: "12px",
  },
};

export default NavBar;
