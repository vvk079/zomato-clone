import React, { useEffect } from "react";
import "../styles/reels.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reel = ({ video }) => {


  useEffect(()=>{
    axios.get("http://localhost:3000/api/food")
    .then(responese=>{
      

    })
  })


  return (
    <div className="reel">
      <video className="video" src={video.url} autoPlay loop muted />
      <div className="overlay">
        <p className="description">{video.description}</p>
        <button className="visit-btn">Visit Store</button>
      </div>
    </div>
  );
};

export default Reel;
