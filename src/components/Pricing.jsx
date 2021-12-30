import React from "react";
import pricingData from "../pricingData";

function PricingCard(props) {
  return (
    <div className="price-card">
      <img className="price-chair-img" src={props.img} alt="chair1-img" />
      <div>
        <h3 className="fec-title">{props.name}</h3>
        <ul>
          <li className="fec">
            <ion-icon name="sparkles-outline"></ion-icon>
            <span> {props.fec1}</span>
          </li>
          <li className="fec">
            <ion-icon name="time-outline"></ion-icon>
            <span> {props.fec2}</span>
          </li>
          <li className="fec">
            <ion-icon name="earth-outline"></ion-icon>
            <span> {props.fec3}</span>
          </li>
          <li className="fec">
            <ion-icon name="cube-outline"></ion-icon>
            <span> {props.fec4}</span>
          </li>
        </ul>
      </div>
      <div className="pricing-detail">
        <p>₹{props.price}</p>
        <a href="">BUY</a>
      </div>
    </div>
  );
}

function createPricingCard(priceItem) {
  return (
    <PricingCard
      key={priceItem.id}
      img={priceItem.img}
      name={priceItem.name}
      fec1={priceItem.fec1}
      fec2={priceItem.fec2}
      fec3={priceItem.fec3}
      fec4={priceItem.fec4}
      price={priceItem.price}
    />
  );
}
export default function Pricing() {
  return (
    <div className="section-pricing">
      <div className="container">
        <h2 className="pricing-title">Our bestselling chairs</h2>
        <div className="pricing grid grid-col-3">
          {pricingData.map(createPricingCard)};
        </div>
      </div>
    </div>
  );
}
