import React from "react";

const Button = ({ text, onClick, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        ...style, // allow overriding styles
      }}
    >
      {text}
    </button>
  );
};

export default Button;
