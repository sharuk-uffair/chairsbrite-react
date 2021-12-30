import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className="section-nav">
        <nav className="container">
          <p>
            <span className="brand">chairs</span>brite
          </p>
          <ul className="nav-list">
            <li className="nav-item">About</li>
            <li className="nav-item">Home</li>
            <li className="nav-item">Business</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
