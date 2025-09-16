import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import axios from "axios";
import "../styles/reels.css";

const Reel = ({ video, isActive }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [foodpartner, setFoodpartner] = useState(null);

  // Fetch partner name
  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/store/${video.foodpartner}`);
        setFoodpartner(res.data);
      } catch (err) {
        console.error("Error fetching partner:", err);
      }
    };
    fetchPartner();
  }, [video.foodpartner]);

  const handleOrder = () => {
    const existing = JSON.parse(localStorage.getItem("cartOrders")) || [];
    existing.push({
      ...video,
      partnerName: foodpartner ? foodpartner.name : "Unknown",
    });
    localStorage.setItem("cartOrders", JSON.stringify(existing));
    navigate("/user/cart");
  };

  const handleWishlist = () => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    existing.push(video);
    localStorage.setItem("wishlist", JSON.stringify(existing));
    navigate("/user/wishlist");
  };

  useEffect(() => {
  if (!videoRef.current) return;
  if (isActive) {
    videoRef.current.play().catch(err => {
      console.log("Play error:", err);
    });
  } else {
    videoRef.current.pause();
  }
}, [isActive, video.video, video.videos]);

  return (
    <div className="reel">
      <video
        key={video.video || video.videos[0]}
        ref={videoRef}
        className="reel-video"
        src={video.video || video.videos[0]}
        loop
        autoPlay
        playsInline
        preload="auto"
        

      />

      {foodpartner && <div className="partner-name">@{foodpartner.name}</div>}

      <div className="reel-description">
        <div className="iteam-price"><h3>Rs {video.price}/-</h3></div> 
      </div>

      <div className="reel-description-1">
        <h3>{video.name}</h3>
        <p>{video.discription}</p>
      </div>

      <div className="reel-actions">
        <button className="action-btn" onClick={handleOrder}>
          <FaShoppingCart size={20} /> Order Now
        </button>
        <button className="action-btn" onClick={() => navigate(`/profile/${video.foodpartner}`)}>
          <FaStore size={14} /> Visit Store
        </button>
      </div>
    </div>
  );
};

export default Reel;
