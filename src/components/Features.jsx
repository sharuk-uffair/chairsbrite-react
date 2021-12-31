import React from "react";
import featuresData from "../featuresData";

function FeatureCard(props) {
  return (
    <>
      <div>
        <span className="fec-icon">{props.icon}</span>
        <h3>{props.name}</h3>
        <p>{props.des}</p>
      </div>
    </>
  );
}

function createFeatureCard(feature) {
  return (
    <FeatureCard
      key={feature.id}
      icon={feature.icon}
      name={feature.name}
      des={feature.des}
    />
  );
}

function Features() {
  return (
    <div className="section-feature container">
      <h2>what makes our chairs special</h2>
      <div className="feature-item grid grid-col-3">
        {featuresData.map(createFeatureCard)}
      </div>
    </div>
  );
}

export default Features;
