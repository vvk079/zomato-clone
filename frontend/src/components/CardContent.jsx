// src/components/CardContent.jsx
import React from "react";

const CardContent = ({ children, style = {} }) => {
  return (
    <div style={{
      padding: "20px",
      ...style
    }}>
      {children}
    </div>
  );
};

export default CardContent;
