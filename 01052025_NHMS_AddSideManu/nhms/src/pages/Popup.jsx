import React from "react";
import "./css/Popup.css";
const Popup = ({ message, onClose, type = "info" }) => {
  const getTypeStyle = () => {
    switch (type) {
      case "success":
        return { borderColor: "#28a745", icon: "✅" };
      case "error":
        return { borderColor: "#dc3545", icon: "❌" };
      case "warning":
        return { borderColor: "#ffc107", icon: "⚠️" };
      case "info":
      default:
        return { borderColor: "#17a2b8", icon: "ℹ️" };
    }
  };

  const { borderColor, icon } = getTypeStyle();

  return (
    <div className="popup-overlay">
      <div
        className="popup-content"
        style={{ borderTop: `5px solid ${borderColor}` }}
      >
        <div
          className="popup-icon"
          style={{ fontSize: "2rem", marginBottom: "10px" }}
        >
          {icon}
        </div>
        <p>{message}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
};

export default Popup;
