// 01052025ManuBar
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 border-top mt-auto">
      <div className="container">
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <a href="#offices" className="text-decoration-none text-muted">
              Offices
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#about" className="text-decoration-none text-muted">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#contact" className="text-decoration-none text-muted">
              Contact
            </a>
          </li>
        </ul>
        <small className="d-block mt-2">
           Address : D 300 Pandav Nagar Delhi 
        </small>
      </div>
    </footer>
  );
}
