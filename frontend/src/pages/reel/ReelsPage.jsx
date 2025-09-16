import React, { useEffect, useState, useRef } from "react";
import Reel from "../../components/Reel";
import "../../styles/reels.css";
import axios from "axios";
import NavBar from "../../components/NavBar"; // sahi path according to project structure

const ReelsPage = () => {
  const [videos, setVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/food", {
          withCredentials: true,
        });
        setVideos(Array.isArray(res.data.fooditems) ? res.data.fooditems : []);
      } catch (err) {
        console.error("Error fetching videos:", err.message);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.7 }
    );

    Array.from(containerRef.current.children).forEach(child =>
      observer.observe(child)
    );

    return () => observer.disconnect();
  }, [videos]);

  return (
    <div className="reels-page-wrapper">
      <div className="reels-container" ref={containerRef}>
        {videos.length > 0 ? (
          videos.map((v, idx) => (
            <div className="reel-wrapper" key={v._id} data-index={idx}>
              <Reel video={v} isActive={idx === activeIndex} />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No videos available.
          </p>
        )}
      </div>
      <NavBar /> {/* ✅ bottom fixed nav */}
    </div>
  );
};

export default ReelsPage;
