// 01052025ManuBar
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar - Fixed Left Menu */}
        <div className="col-2 bg-light border-end p-3">
          <h4 className="mb-4">Menu</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home/newapplication" className="nav-link">
                Application Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content - Right Area (85%) */}
        <div className="col-10 p-4">
          <Outlet />{" "}
          {/* This renders the child routes based on the navigation */}
        </div>
      </div>
    </div>
  );
}
