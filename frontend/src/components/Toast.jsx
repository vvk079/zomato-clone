// src/components/Progress.jsx
import React from "react";

const Progress = ({ value = 0 }) => {
  return (
    <div style={{
      width: "100%",
      height: "10px",
      backgroundColor: "#eee",
      borderRadius: "4px",
      overflow: "hidden",
      marginBottom: "10px"
    }}>
      <div style={{
        width: `${value}%`,
        height: "100%",
        backgroundColor: "#007bff",
      }} />
    </div>
  );
};

export default Progress;
