import React from 'react';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa6';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com/MuhammadMoiz-stack/' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/muhammad-moiz-6744682b8/' },
  ];

  return (
    <footer className="relative w-full bg-[#000000] border-t border-gray-800 pt-16 pb-8 overflow-hidden">
      {/* 🌊 BACKGROUND EFFECT (Subtle Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#00ff99] opacity-[0.03] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 🧩 STRUCTURE: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 🧩 SECTION 1: LOGO + ABOUT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-mono font-bold tracking-wider text-white mb-4">
              <span className="text-[#00ff99]">{`{`}</span>
              dev-moiz
              <span className="text-[#00ff99]">{`}`}</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Frontend developer building modern and responsive web experiences with a focus on clean code and pixel-perfect design.
            </p>
          </div>

          {/* 🧩 SECTION 2: QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#00ff99] hover:translate-x-1 transition-all duration-300 ease-in-out inline-flex items-center group"
                >
                  <span className="w-0 h-px bg-[#00ff99] group-hover:w-3 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 🧩 SECTION 3: SOCIAL LINKS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-[#00ff99] hover:text-[#00ff99] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] bg-black/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-xs italic">Available for freelance projects</p>
          </div>

          {/* 🧩 SECTION 4: CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Let’s work together</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">Have a project in mind? Let's bring it to life.</p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 border border-[#00ff99] rounded-full text-[#00ff99] text-sm font-medium transition-all duration-300 hover:bg-[#00ff99] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] overflow-hidden"
            >
              <span>Hire Me</span>
              <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

        </div>

        {/* 🔻 BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs md:text-sm tracking-wide">
              © 2026 <span className="text-gray-300">Muhammad Moiz</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
              <span className="hidden sm:inline">Crafted with</span>
              <span className="px-2 py-0.5 bg-gray-900 rounded text-gray-300">React</span>
              <span className="text-[#00ff99]">&</span>
              <span className="px-2 py-0.5 bg-gray-900 rounded text-gray-300">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
