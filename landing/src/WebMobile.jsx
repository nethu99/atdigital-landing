import React from "react";

const WebMobile = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto max-w-[1064px] min-h-[414px]
          flex items-center gap-[108px] pt-2 pb-20

        "
      >
        {/* Image — 414 x 414 */}
        <img
          src="/web.png"
          alt="Web & Mobile App Development"
          className="w-[414px] h-[414px] object-contain"
        />

        {/* Text block — 542 x 187 with ~20px gaps */}
        <div className="w-[542px] flex flex-col gap-5">
          <h2 className="text-[32px] font-bold text-[#4F46E5] leading-tight">
            Web &amp; Mobile App Development
          </h2>

          <p className="text-[16px] leading-[1.5] text-[#2b2b2b]">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <button
            className="
              self-start px-5 py-3 rounded
              bg-[#F28D35] text-white text-[14px] font-medium
            "
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebMobile;
