// import React, { useState } from "react";
// import "./css/LoginSignup.css";
// import Popup from "./Popup";
// import { sha512 } from "js-sha512";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     userId: "100000001",
//     password: "Nursing@123",
//   });

//   const requestData = {
//     ...formData,
//     password: sha512("Nursing@123").toString(),
//     userTypeId: 1,
//   };

//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // Popup state
//   const [popupMessage, setPopupMessage] = useState("");
//   const [popupType, setPopupType] = useState("info");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const showPopup = (message, type = "info") => {
//     setPopupMessage(message);
//     setPopupType(type);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.userId || !formData.password) {
//       setError("Both fields are required.");
//       return;
//     }
//     try {
//       const response = await fetch(
//         "https://10.128.119.21:44382/api/Account/authenticate",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok && result.accessToken && result.refreshToken) {
//         localStorage.setItem("token", result.accessToken);
//         localStorage.setItem("refreshToken", result.refreshToken);

//         //showPopup("Login successful!", "success");
//         navigate("/home");
//       } else {
//         showPopup("Invalid credentials. Please try again.", "error");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       showPopup("An error occurred. Please try again.", "error");
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Login</h1>
//         <div className="loginsignup-fields">
//           <input
//             type="text"
//             name="userId"
//             placeholder="User Id"
//             value={formData.userId}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button onClick={handleSubmit} className="signup-submit-btn">
//           Login
//         </button>
//       </div>

//       {isPopupOpen && (
//         <Popup message={popupMessage} type={popupType} onClose={closePopup} />
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import Popup from "./Popup";
import { sha512 } from "js-sha512";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    userId: "100000001",
    password: "Nursing@123",
  });

  const requestData = {
    ...formData,
    password: sha512("Nursing@123").toString(),
    userTypeId: 1,
  };

  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("info");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const showPopup = (message, type = "info") => {
    setPopupMessage(message);
    setPopupType(type);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userId || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      localStorage.setItem("token", "12344sdfsdfsadfsadfsdfsdfsdfsdf");
      localStorage.setItem(
        "refreshToken",
        "sfsadfasfsafsadfsadfsadfsadfsdfsdf"
      );
      navigate("/home");

      //showPopup("Invalid credentials. Please try again.", "error");
      // const response = await fetch(
      //   "https://10.128.119.21:44382/api/Account/authenticate",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(requestData),
      //   }
      // );

      // const result = await response.json();

      // if (response.ok && result.accessToken && result.refreshToken) {
      //   localStorage.setItem("token", result.accessToken);
      //   localStorage.setItem("refreshToken", result.refreshToken);
      //   navigate("/home");
      // } else {
      //   showPopup("Invalid credentials. Please try again.", "error");
      // }
    } catch (error) {
      console.error("Error:", error);
      showPopup("An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="mb-4 text-center">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={formData.userId}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>

      {isPopupOpen && (
        <Popup message={popupMessage} type={popupType} onClose={closePopup} />
      )}
    </div>
  );
}
