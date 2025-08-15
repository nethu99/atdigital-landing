import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4B3AFF] text-white w-full px-20 py-10">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto flex justify-between">
        {/* Left - Logo + Description */}
        <div className="max-w-[413px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 mb-4">
            <img
              src="/Hlogo.png"
              alt="Logo icon"
              style={{
                width: "44.02px",
                height: "43.75px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />
            <img
              src="/at digital.png"
              alt="AT Digital Logo"
              style={{
                width: "167.983px",
                height: "49.621px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />
          </a>

          {/* Description */}
          <p className="font-lato font-normal text-[16px] leading-[100%]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        {/* Technologies + Services */}
        <div
          className="flex"
          style={{
            width: "522px",
            height: "141px",
            gap: "128px",
          }}
        >
          {/* Technologies */}
          <div>
            <h3 className="font-bold mb-2">Our Technologies</h3>
            <ul className="space-y-1">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-2">Our Services</h3>
            <ul className="space-y-1">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App <br />Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + Privacy/Terms */}
      <div className="flex flex-col items-center my-[40px]">
        {/* Divider */}
        <div
          className="border-t border-white"
          style={{ width: "630px", height: "0px" }}
        ></div>

        {/* Privacy + Terms */}
        <div
          className="flex items-center gap-[16px] mt-4"
          style={{ width: "257px", height: "17px" }}
        >
          <a
            href="#"
            className="text-[14px] font-medium capitalize"
            style={{
              fontFamily: "Inter",
              lineHeight: "100%",
              whiteSpace: "nowrap",
            }}
          >
            Privacy Policy
          </a>
          {/* Vertical line */}
          <span
            className="border-l border-white"
            style={{
              height: "17px",
              borderWidth: "1px",
            }}
          ></span>
          <a
            href="#"
            className="text-[14px] font-medium capitalize"
            style={{
              fontFamily: "Inter",
              lineHeight: "100%",
              whiteSpace: "nowrap",
            }}
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
