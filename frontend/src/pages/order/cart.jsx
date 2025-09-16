import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "../../styles/cart.css"; // CSS import
import NavBar from "../../components/NavBar";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartOrders")) || [];
    setCartItems(saved);
  }, []);

  const handleRemove = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem("cartOrders", JSON.stringify(updated));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h3>No order found.</h3>
        <NavBar />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>Your Orders</h2>

      <div className="cart-grid">
        {cartItems.map((item, index) => (
          <div key={index} className="order-card">
            <button className="remove-btn" onClick={() => handleRemove(index)}>
              <FaTrash />
            </button>
            <video
              src={item.video || item.videos?.[0]}            
              autoPlay={false}
              muted
              playsInline
            />
            <div className="info-text">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity || 1}</p>
              <p>Price: ₹{item.price * (item.quantity || 1)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        Total: <strong>₹{getTotal()}</strong>
      </div>

      <button className="place-order-btn" onClick={() => alert("Order Placed!")}>
        Place Order
      </button>

      <NavBar />
    </div>
  );
};

export default Cart;
