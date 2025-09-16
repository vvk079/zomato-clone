// src/components/Textarea.jsx
import React from "react";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    />
  );
};

export default Textarea;
