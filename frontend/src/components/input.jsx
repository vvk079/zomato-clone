// src/components/Input.jsx
import React from "react";

const Input = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    />
  );
};

export default Input;
