// import React, { useState } from "react";
// import "./css/LoginSignup.css";
// import Popup from "./Popup";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import "./css/DatePickerStyles.css"; // Custom fixes for calendar appearance

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     applicantName: "",
//     applicantDob: null,
//     applicantGender: "",
//     applicantFatherName: "",
//     applicantMotherName: "",
//     applicantSpouseName: "",
//     applicantMobileNo: "",
//     applicantEmailId: "",
//     actionIpAddress: "198.128.1.3",
//     agree: false,
//   });

//   const [genderError, setGenderError] = useState("");

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
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     if (name === "applicantGender") {
//       const allowed = ["M", "F"];
//       setGenderError(
//         allowed.includes(value.toUpperCase()) ? "" : "Gender must be 'M' or 'F'"
//       );
//     }
//     if (
//       name === "applicantName" ||
//       name === "applicantFatherName" ||
//       name === "applicantMotherName" ||
//       name === "applicantSpouseName"
//     ) {
//       const filtered = value.replace(/[^A-Za-z\s]/g, "");
//       setFormData((prev) => ({
//         ...prev,
//         [name]: filtered,
//       }));
//       return;
//     }

//     if (name === "applicantMobileNo") {
//       // Only allow digits
//       let digitsOnly = value.replace(/\D/g, "");

//       // Enforce max 10 digits
//       if (digitsOnly.length > 10) {
//         digitsOnly = digitsOnly.slice(0, 10);
//       }

//       // If user starts typing and it's not 7, 8, or 9 — block it
//       if (digitsOnly.length === 1 && !/^[7-9]$/.test(digitsOnly)) {
//         return; // don't update state at all
//       }

//       // Valid case: update form
//       setFormData((prev) => ({
//         ...prev,
//         [name]: digitsOnly,
//       }));

//       return;
//     }

//     if (name === "applicantEmailId") {
//       // Allow typing, but no spaces
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value.replace(/\s/g, ""),
//       }));
//       return;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.agree) {
//       alert("You must agree to the terms before submitting.");
//       return;
//     }

//     const formattedDob = formData.applicantDob
//       ? format(formData.applicantDob, "yyyy-MM-dd")
//       : "";

//     const payload = {
//       ...formData,
//       applicantDob: formattedDob,
//     };
//     delete payload.agree;

//     try {
//       const response = await fetch(
//         "https://10.128.119.21:44382/api/Account/register",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );
//       const result = await response.json();
//       if (response.ok && result.registrationId) {
//         showPopup(
//           `Congratulations! Your registration ID: ${result.registrationId}`,
//           "success"
//         );
//       } else {
//         showPopup("Registration failed. Please try again.", "error");
//       }
//     } catch (error) {
//       showPopup("Something went wrong. Please try again.", "error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input
//             type="text"
//             name="applicantName"
//             placeholder="Your Name"
//             value={formData.applicantName}
//             onChange={handleChange}
//           />

//           <div className="loginsignup-input-wrapper">
//             <DatePicker
//               selected={formData.applicantDob}
//               onChange={(date) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   applicantDob: date,
//                 }))
//               }
//               dateFormat="yyyy-MM-dd"
//               maxDate={new Date()}
//               showYearDropdown
//               showMonthDropdown
//               dropdownMode="select"
//               placeholderText="Date of Birth (YYYY-MM-DD)"
//               className="loginsignup-input"
//               onKeyDown={(e) => e.preventDefault()}
//             />
//           </div>

//           {/* Gender field with radio buttons */}
//           <div className="loginsignup-input-wrapper gender-radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="applicantGender"
//                 value="M"
//                 checked={formData.applicantGender === "M"}
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="applicantGender"
//                 value="F"
//                 checked={formData.applicantGender === "F"}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>
//           {genderError && <small style={{ color: "red" }}>{genderError}</small>}

//           <input
//             type="text"
//             name="applicantFatherName"
//             placeholder="Father Name"
//             value={formData.applicantFatherName}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="applicantMotherName"
//             placeholder="Mother Name"
//             value={formData.applicantMotherName}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="applicantSpouseName"
//             placeholder="Spouse Name"
//             value={formData.applicantSpouseName}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="applicantMobileNo"
//             placeholder="Mobile No."
//             value={formData.applicantMobileNo}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="applicantEmailId"
//             placeholder="Email Id"
//             value={formData.applicantEmailId}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="loginsignup-agree">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//           />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         <button type="submit" className="signup-submit-btn">
//           Register
//         </button>
//         <p className="loginsignup-login">
//           Already have an account? <span>Login here</span>
//         </p>
//       </div>

//       {isPopupOpen && (
//         <Popup message={popupMessage} type={popupType} onClose={closePopup} />
//       )}
//     </form>
//   );
// }
import React, { useState } from "react";
import Popup from "./Popup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantDob: null,
    applicantGender: "",
    applicantFatherName: "",
    applicantMotherName: "",
    applicantSpouseName: "",
    applicantMobileNo: "",
    applicantEmailId: "",
    actionIpAddress: "198.128.1.3",
    agree: false,
  });

  const [genderError, setGenderError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("info");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const showPopup = (message, type = "info") => {
    setPopupMessage(message);
    setPopupType(type);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "applicantGender") {
      const allowed = ["M", "F", "O"];
      setGenderError(
        allowed.includes(value.toUpperCase())
          ? ""
          : "Gender must be 'M', 'F', or 'O'"
      );
    }

    if (
      name === "applicantName" ||
      name === "applicantFatherName" ||
      name === "applicantMotherName" ||
      name === "applicantSpouseName"
    ) {
      const filtered = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      return;
    }

    if (name === "applicantMobileNo") {
      let digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 10) digitsOnly = digitsOnly.slice(0, 10);
      if (digitsOnly.length === 1 && !/^[7-9]$/.test(digitsOnly)) return;
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      return;
    }

    if (name === "applicantEmailId") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\s/g, "") }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms before submitting.");
      return;
    }

    const formattedDob = formData.applicantDob
      ? format(formData.applicantDob, "yyyy-MM-dd")
      : "";

    const payload = {
      ...formData,
      applicantDob: formattedDob,
    };
    delete payload.agree;

    try {
      const response = await fetch(
        "https://10.128.119.21:44382/api/Account/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      if (response.ok && result.registrationId) {
        showPopup(
          `Congratulations! Your registration ID: ${result.registrationId}`,
          "success"
        );
      } else {
        showPopup("Registration failed. Please try again.", "error");
      }
    } catch (error) {
      showPopup("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to right, #f0f2f5, #dfe9f3)",
        padding: "40px 20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-100"
        style={{ maxWidth: "600px" }}
      >
        <div className="card shadow p-4">
          <h3
            className="text-white text-center py-3 mb-4"
            style={{ backgroundColor: "#007bff", borderRadius: "8px" }}
          >
            Sign Up
          </h3>

          <div className="mb-3">
            <input
              type="text"
              name="applicantName"
              className="form-control"
              placeholder="Your Name"
              value={formData.applicantName}
              onChange={handleChange}
            />
          </div>

          {/* <div className="mb-3">
            <DatePicker
              selected={formData.applicantDob}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  applicantDob: date,
                }))
              }
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              placeholderText="Date of Birth (YYYY-MM-DD)"
              className="form-control"
              onKeyDown={(e) => e.preventDefault()}
            />
          </div> */}

          <div className="mb-3">
            <div style={{ width: "100%" }}>
              <DatePicker
                selected={formData.applicantDob}
                onChange={(date) =>
                  setFormData((prev) => ({
                    ...prev,
                    applicantDob: date,
                  }))
                }
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                placeholderText="Date of Birth (YYYY-MM-DD)"
                className="form-control w-100 custom-datepicker-input"
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Gender label + 3 options */}
          <div className="mb-3 d-flex align-items-center">
            <label className="me-3 fw-bold" style={{ whiteSpace: "nowrap" }}>
              Gender:
            </label>
            <div className="form-check me-3">
              <input
                type="radio"
                className="form-check-input"
                name="applicantGender"
                value="M"
                checked={formData.applicantGender === "M"}
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check me-3">
              <input
                type="radio"
                className="form-check-input"
                name="applicantGender"
                value="F"
                checked={formData.applicantGender === "F"}
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="applicantGender"
                value="O"
                checked={formData.applicantGender === "O"}
                onChange={handleChange}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>
          {genderError && <small className="text-danger">{genderError}</small>}

          <div className="mb-3">
            <input
              type="text"
              name="applicantFatherName"
              className="form-control"
              placeholder="Father Name"
              value={formData.applicantFatherName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="applicantMotherName"
              className="form-control"
              placeholder="Mother Name"
              value={formData.applicantMotherName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="applicantSpouseName"
              className="form-control"
              placeholder="Spouse Name"
              value={formData.applicantSpouseName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="applicantMobileNo"
              className="form-control"
              placeholder="Mobile No."
              value={formData.applicantMobileNo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="applicantEmailId"
              className="form-control"
              placeholder="Email ID"
              value={formData.applicantEmailId}
              onChange={handleChange}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="agree"
              className="form-check-input"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="form-check-label">
              I agree to the terms of use & privacy policy.
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <span className="text-primary">Login here</span>
          </p>
        </div>
      </form>

      {isPopupOpen && (
        <Popup message={popupMessage} type={popupType} onClose={closePopup} />
      )}
    </div>
  );
}
