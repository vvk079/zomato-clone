import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar";

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);
  const [foodpartner, setFoodpartner] = useState(null);

  useEffect(() => {
    const fetchProfileAndFoods = async () => {
      try {
        const resPartner = await axios.get(`http://localhost:3000/api/store/${id}`);
        setFoodpartner(resPartner.data);

        const resFoods = await axios.get(`http://localhost:3000/api/food`);
        const partnerFoods = resFoods.data.fooditems.filter(f => f.foodpartner === id);
        setFoodItems(partnerFoods);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchProfileAndFoods();
  }, [id]);

  const handleOrder = (item) => {
    const existing = JSON.parse(localStorage.getItem("cartOrders")) || [];
    existing.push({
      ...item,
      partnerName: foodpartner.name,
    });
    localStorage.setItem("cartOrders", JSON.stringify(existing));
    navigate("/user/cart");
  };

  if (!foodpartner) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ backgroundColor: "#f7f7f7", minHeight: "100vh", paddingBottom: "70px" }}>
      <div style={styles.header}>
        <h2 style={styles.partnerName}>@{foodpartner.name}</h2>
        <p style={styles.customerServed}>{foodpartner.customersServed} Customers Served</p>
      </div>

      <div style={styles.grid}>
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div key={item._id} style={styles.card}>
              <video
                src={item.videos[0]}
                muted
                loop
                autoPlay
                playsInline
                style={styles.video}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.foodName}>{item.name}</h3>
                <p style={styles.foodDesc}>{item.discription}</p>
                <div style={styles.priceContainer}>
                  <span style={styles.priceText}>Rs {item.price}/-</span>
                  <button style={styles.orderBtn} onClick={() => handleOrder(item)}>Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No videos available</p>
        )}
      </div>

      <NavBar />
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    padding: "20px 10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.05)"
  },
  partnerName: { fontSize: "24px", color: "#333", margin: "0 0 5px 0" },
  customersServed: { fontSize: "14px", color: "#777", margin: 0 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // ✅ 2 cards per row
    gap: "15px",
    padding: "15px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
    height: "350px" // ✅ vertical lambe card
  },
  cardContent: { padding: "10px", display: "flex", flexDirection: "column", gap: "6px", flexGrow: 1 },
  video: {
    width: "100%",
    height: "200px", // ✅ video ka height thoda lamba
    objectFit: "cover",
    backgroundColor: "#000",
    borderRadius: "8px"
  },
  foodName: { fontSize: "16px", color: "#333", margin: 0, fontWeight: "600" },
  foodDesc: { fontSize: "13px", color: "#666", margin: 0 },
  priceContainer: { marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
  priceText: { fontWeight: "bold", fontSize: "14px", color: "#000" },
  orderBtn: {
    padding: "6px 10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default ProfilePage;
