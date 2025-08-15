import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[600px] md:h-[900px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/background.jpg')"
      }}
    >
      <div
        className="absolute bottom-10 left-5 md:left-16 bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] rounded-md p-6 md:p-10 max-w-[90%] md:max-w-[500px]"
      >
        <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-white">
          We Crush Your <br />
          Competitors, Goals, And <br />
          Sales Records - Without <br />
          The B.S.
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 md:px-6 md:py-3 rounded font-semibold text-white">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
