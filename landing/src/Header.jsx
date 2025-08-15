import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(79,70,229,1)] text-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium leading-none font-inter">
          <a href="#services" className="hover:underline underline-offset-4">
            SERVICES
          </a>
          <a href="#about" className="hover:underline underline-offset-4">
            ABOUT US
          </a>
          <a href="#contact" className="hover:underline underline-offset-4">
            CONTACT US
          </a>
          <a href="#careers" className="hover:underline underline-offset-4">
            CAREERS
          </a>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-white/15 bg-[rgba(79,70,229,1)]">
          <nav className="mx-auto max-w-screen-xl px-4 py-3 text-sm font-medium">
            <ul className="space-y-1">
              <li>
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 hover:bg-white/10"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 hover:bg-white/10"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 hover:bg-white/10"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 hover:bg-white/10"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
