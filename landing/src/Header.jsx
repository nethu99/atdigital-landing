// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-purple text-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          
            <img
              src="/Hlogo.png" // if in public folder
              alt="AT Digital Logo"
              style={
                {
                  width: "44.02px",
                  height: "43.75px",
                  opacity: 1,
                  transform: "rotate(0deg)"
                }
              }
            />
            <img
  src="/at digital.png"
  alt="AT Digital Logo"
  style={{
    width: "167.98324584960938px",
    height: "49.62127685546875px",
    opacity: 1,
    transform: "rotate(0deg)"
  }}
/>

              
          
          {/* <span className="text-lg font-bold tracking-tight">at digital</span> */}
        </a>

        {/* Desktop nav */}
<nav className="hidden md:flex items-center gap-[28px] text-[14px] font-medium leading-[100%] text-white font-inter">
  <a href="#services" className="h-[17px] hover:underline underline-offset-4">
    SERVICES
  </a>
  <a href="#about" className="h-[17px] hover:underline underline-offset-4">
    ABOUT US
  </a>
  <a href="#contact" className="h-[17px] hover:underline underline-offset-4">
    CONTACT US
  </a>
  <a href="#careers" className="h-[17px] hover:underline underline-offset-4">
    CAREERS
  </a>
</nav>


        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 md:hidden"
        >
          <svg
            className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/15 bg-brand-purple`}>
        <nav className="mx-auto max-w-screen-xl px-4 py-3 text-sm font-medium">
          <ul className="space-y-1">
            <li><a href="#services" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">Services</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">About Us</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">Contact Us</a></li>
            <li><a href="#careers" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">Careers</a></li>
            <li className="pt-1">
              {/* <a */}
                {/* href="#cta" */}
                {/* onClick={() => setOpen(false)} */}
                {/* className="block rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-2 text-center font-semibold shadow hover:shadow-md" */}
              {/* > */}
                {/* Get Free Consultation */}
              {/* </a> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
