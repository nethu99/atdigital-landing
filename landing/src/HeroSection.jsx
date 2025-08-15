import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        width: "1482px",
        height: "900px",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        margin: "0px ",
        // top:"-336px",
        scale:"crop",
        
      }}
    >
      <div
        style={{
          width: "500px",
          height: "306px",
          position: "absolute",
          top: "550px",
          left: "60px",
          opacity: 1,
          paddingTop: "20px",
          paddingRight: "40px",
          paddingBottom: "0px",
          paddingLeft: "40px",
          gap: "20px",
          borderRadius: "7px",
          background: "linear-gradient(to right, rgba(29, 220, 182, 1), hsla(194, 72%, 52%, 1.00))",

        }}
      >
        <h1 className="text-4xl font-bold leading-snug mb-6 text-white">
          We Crush Your 
          <br></br>Competitors, Goals, And 
          <br></br>Sales Records - Without 
          <br></br>The B.S.
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold text-white">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
