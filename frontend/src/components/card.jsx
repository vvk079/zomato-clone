// src/components/Card.jsx
import React from "react";

const Card = ({ children, style = {} }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      ...style
    }}>
      {children}
    </div>
  );
};

export default Card;
