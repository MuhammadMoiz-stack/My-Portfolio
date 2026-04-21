import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#00ff99]/20"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-17.5 lg:h-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-white font-mono text-2xl tracking-wider hover:text-[#00ff99] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]"
          >
            <h2 className="text-2xl font-mono font-bold tracking-wider text-white">
              <span className="text-[#00ff99]">{`{`}</span>
              dev-moiz
              <span className="text-[#00ff99]">{`}`}</span>
            </h2>
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-13">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 text-xl font-medium transition-colors duration-300 hover:text-[#00ff99] group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00ff99]"></span>
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-[#00ff99]" />
            ) : (
              <Menu size={28} className="hover:text-[#00ff99]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`absolute top-17.5 left-0 w-full bg-black border-b border-[#00ff99]/20 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-lg font-medium hover:text-[#00ff99] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
