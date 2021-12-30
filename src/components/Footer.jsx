import React from "react";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="section-footer container">
      <div className="footer-icon">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
      Copyright © {year} by chairsbrite.
    </div>
  );
}
