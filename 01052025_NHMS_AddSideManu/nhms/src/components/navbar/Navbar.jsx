import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useRouteLoaderData, Form } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const token = useRouteLoaderData("root");

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("show");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      {/* Logo */}
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center"
        onClick={() => setMenu("home")}
      >
        <img src={logo} alt="logo" height="40" className="me-2" />
        <span className="fw-bold">Commerce Pro</span>
      </Link>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={dropdown_toggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Centered menu and right-aligned buttons */}
      <div
        className="collapse navbar-collapse justify-content-between"
        ref={menuRef}
      >
        {/* Empty spacer to push center */}
        <div className="d-lg-none"></div>

        {/* Centered menu */}
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${menu === "home" ? "active fw-bold" : ""}`}
              onClick={() => setMenu("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/guidelines"
              className={`nav-link ${
                menu === "guidelines" ? "active fw-bold" : ""
              }`}
              onClick={() => setMenu("guidelines")}
            >
              Guidelines
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/downloads"
              className={`nav-link ${
                menu === "downloads" ? "active fw-bold" : ""
              }`}
              onClick={() => setMenu("downloads")}
            >
              Downloads
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className={`nav-link ${
                menu === "contactus" ? "active fw-bold" : ""
              }`}
              onClick={() => setMenu("contactus")}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right-aligned buttons */}
        <div className="d-flex gap-2">
          {!token ? (
            <>
              <Link to="/login">
                <button className="btn btn-outline-primary">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary">New User</button>
              </Link>
            </>
          ) : (
            <Form action="/logout" method="post">
              <button className="btn btn-danger">Logout</button>
            </Form>
          )}
        </div>
      </div>
    </nav>
  );
}
