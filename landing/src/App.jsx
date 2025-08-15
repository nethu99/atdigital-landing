// src/App.jsx
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import WebMobile from "./WebMobile";
import Consulting from "./Consulting";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Web & Mobile Section */}
      <WebMobile />

      {/* Consulting Section */}
      <Consulting />
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
