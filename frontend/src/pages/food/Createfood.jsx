import React, { useState } from "react";
import axios from "axios";

const CreateFood = () => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !videoFile) {
      setMessage("Name and video are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("discription", discription);
    formData.append("video", videoFile);

    try {
      const res = await axios.post("http://localhost:3000/api/food", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      setMessage("Food item created successfully!");
      setName("");
      setDiscription("");
      setVideoFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Error uploading food item.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter food name"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Description:</label>
          <textarea
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter food description"
            rows="4"
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Upload Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            style={{ width: "100%", marginTop: "5px" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>
          Add Food
        </button>
      </form>

      {message && <p style={{ textAlign: "center", marginTop: "15px", color: "blue" }}>{message}</p>}
    </div>
  );
};

export default CreateFood;
