import React from "react";
import "./Consulting.css";

const Consulting = () => {
  return (
    <section className="consulting-section">
      <div className="consulting-content">
        <div className="consulting-text">
          <h2>Digital Strategy Consulting</h2>
          <p>
            We provide expert consulting to help you craft the right digital
            strategy for your business. From identifying market opportunities
            to optimizing online presence, we guide you every step of the way.
          </p>
          <button className="consulting-btn">LEARN MORE</button>
        </div>
        <div className="consulting-image">
          <img src="/search.png" alt="Digital Strategy" />
        </div>
      </div>
    </section>
  );
};

export default Consulting;
