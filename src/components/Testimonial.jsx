import React from "react";
import testImg from "../images/customers.jpg";

export default function Testimonial() {
  return (
    <>
      <div className="section-testimonial ">
        <div className="testimonial container">
          <img src={testImg} alt="customer-img" />
          <div className="testimonial-item">
            <h3>"We couldn't live without these chairs anymore"</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </p>
            <span>— Mary and Sarah Johnson</span>
          </div>
        </div>
      </div>
    </>
  );
}
