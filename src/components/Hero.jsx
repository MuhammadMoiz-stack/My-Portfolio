import React from "react";
import { Download } from "lucide-react";
import heroImg from "/src/assets/my resume image.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#000000] flex items-center justify-center overflow-hidden">
      {/* GREEN GALAXY EFFECT - Layer 1 */}
      <div className="absolute -bottom-24 -left-24 w-125 h-125 rounded-full bg-linear-to-tr from-[#00ff99] via-[#00cc66] to-transparent blur-[120px] opacity-20 mix-blend-screen animate-pulse"></div>

      {/* GREEN GALAXY EFFECT - Layer 2 (Depth) */}
      <div className="absolute bottom-0 left-1/4 w-75 h-75 rounded-full bg-[#00ff99] blur-[150px] opacity-10"></div>

      <div className="container max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a]/50 backdrop-blur-sm p-8 md:p-16 rounded-4xl border border-white/5 shadow-2xl">
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <span className="text-gray-400 tracking-[0.4em] lowercase text-xs md:text-sm animate-fade-in">
              hello!
            </span>

            <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight tracking-tight">
              I’m <span className="text-white">Moiz</span>
            </h1>

            <div className="relative group">
              <h2 className="text-[#00ff99] tracking-[0.3em] uppercase text-sm md:text-lg font-medium drop-shadow-[0_0_10px_rgba(0,255,153,0.5)]">
                frontend developer
              </h2>
              {/* Subtle glow under the role */}
              <div className="absolute -inset-1 bg-[#00ff99]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              {/* Download CV Button */}
              <a
                href="/public/MuhammadMoiz-WebDeveloper.pdf"
                className="group relative flex items-center gap-2 px-8 py-3 rounded-full bg-black border border-[#00ff99] text-white font-medium transition-all duration-300 hover:bg-[#00ff99] hover:text-black hover:shadow-[0_0_25px_rgba(0,255,153,0.6)] active:scale-95"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/MuhammadMoiz-stack/"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black border border-gray-700 text-gray-400 transition-all duration-300 hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-moiz-6744682b8/"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black border border-gray-700 text-gray-400 transition-all duration-300 hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="relative group lg:justify-self-end">
            <div className="relative w-full max-w-100 md:max-w-112.5 aspect-4/5 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={heroImg}
                alt="Moiz Portfolio Portrait"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />

              {/* Gradient Overlay for Fade Effect */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent"></div>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>
            </div>

            {/* Decorative Elements around image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#00ff99]/30 rounded-tr-3xl pointer-events-none group-hover:border-[#00ff99]/60 transition-colors duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#00ff99]/30 rounded-bl-3xl pointer-events-none group-hover:border-[#00ff99]/60 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
