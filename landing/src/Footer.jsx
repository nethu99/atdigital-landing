import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgba(79,70,229,1)] text-white w-full px-6 sm:px-10 lg:px-20 py-6">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Left - Logo + Description */}
        <div className="max-w-[413px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 mb-4">
            <img
              src="/Hlogo.png"
              alt="Logo icon"
              className="w-[44px] h-[44px]"
            />
            <img
              src="/at digital.png"
              alt="AT Digital Logo"
              className="w-[168px] h-[50px]"
            />
          </a>

          {/* Description */}
          <p className="font-lato font-normal text-[16px] leading-[140%]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective — your
            business results.
          </p>
        </div>

        {/* Technologies + Services */}
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-[128px]">
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
              <li>
                Web & Mobile App <br /> Development
              </li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + Privacy/Terms */}
      <div className="flex flex-col items-center mt-6">
        {/* Divider */}
        <div className="border-t border-white w-full max-w-[630px]"></div>

        {/* Privacy + Terms */}
        <div className="flex items-center gap-4 mt-4 text-sm">
          <a href="#" className="whitespace-nowrap">
            Privacy Policy
          </a>
          <span className="border-l border-white h-4"></span>
          <a href="#" className="whitespace-nowrap">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
