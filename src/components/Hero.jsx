import React from "react";
import hero from "../images/hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="section-hero">
        <div className="container hero-box grid grid-col-2">
          <div className="box-1">
            <h1>We design and build better chairs, for a better life</h1>
            <p>
              In a small shop in the heart of Lisbon, we spend our days
              relentlessly perfecting the chair. The result is a perfect blend
              of beauty and comfort, that will have a lasting impact on your
              health.
            </p>
            <a href="#">Get your comfort now</a>
          </div>
          <div className="box-2">
            <img src={hero} alt="hero-img" />
          </div>
        </div>
      </div>
    </>
  );
}
