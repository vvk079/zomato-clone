import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const UserPayment = () => {
  const navigate = useNavigate();

  return (
    <div style={style.container}>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div style={style.title}>Coming Soon.......</div>
      <div >
        <NavBar />
      </div>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
  },
 
};

export default UserPayment;
