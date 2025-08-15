import React from "react";



const HeroSection = () => {
  return (
    <>
      {/* <Header /> */}
      <section
        style={{
          width: "1440px",
          height: "700px",
          backgroundImage: "url('/background.jpg')", // Put background.jpg in public/
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          position: "relative",
          margin: "0 auto",
        }}
        className="flex items-center justify-start"
      >
        {/* Example content box */}
        <div className="bg-gradient-to-r from-green-400 to-cyan-500 p-8 max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold">
            GET FREE CONSULTATION
          </button>
        </div>
      </section>
      
    </>
  );
};

export default HeroSection;
