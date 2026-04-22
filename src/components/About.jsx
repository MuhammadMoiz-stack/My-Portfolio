import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Layout, Smartphone } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const educationItems = [
    {
      degree: "Intermediate (Computer Science)",
      institution: "Nusrat Bhutto College",
      status: "1st Year Completed",
    },
    {
      degree: "Intermediate (Computer Science)",
      institution: "Nusrat Bhutto College",
      status: "Currently in 2nd Year",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#000000] py-24 overflow-hidden"
    >
      {/* 🌊 BACKGROUND EFFECT (Subtle Glow) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#00ff99] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ff99] opacity-[0.03] blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 🧩 HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-[#00ff99]">Me</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg font-medium">
            Get to know me
          </p>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* 🧱 MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 🧩 LEFT SIDE (INTRO) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftSlideVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff99]/10 border border-[#00ff99]/20 text-[#00ff99] text-sm font-semibold mb-6">
              <Code size={16} />
              <span>Frontend Developer</span>
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Crafting{" "}
              <span className="text-[#00ff99]">Digital Experiences</span> with
              Precision
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
              I am a Computer Science student currently studying in 2nd year. I
              have a strong interest in frontend development and building
              modern, responsive websites. I have experience working with HTML,
              CSS, JavaScript, and React, and I enjoy creating clean and
              user-friendly interfaces.
            </p>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#00ff99]">
                  <Layout size={20} />
                  <span className="text-white font-medium">Modern UI</span>
                </div>
                <p className="text-gray-500 text-sm italic">
                  Clean & minimal designs
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#00ff99]">
                  <Smartphone size={20} />
                  <span className="text-white font-medium">Responsive</span>
                </div>
                <p className="text-gray-500 text-sm italic">
                  Mobile-first approach
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🧩 RIGHT SIDE (EDUCATION CARD) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightSlideVariants}
            className="relative"
          >
            <div className="absolute -inset-1 bg-[#00ff99]/10 blur-2xl rounded-2xl pointer-events-none"></div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:border-[#00ff99]/50 active:border-[#00ff99]/50 group shadow-2xl cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00ff99]/10 text-[#00ff99] group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-white font-bold text-xl uppercase tracking-widest">
                  Education
                </h3>
              </div>

              <div className="space-y-10 relative">
                {/* Timeline Line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-800"></div>

                {educationItems.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#00ff99] z-10 group-hover:shadow-[0_0_8px_#00ff99] transition-all duration-300"></div>

                    <div className="flex flex-col gap-1">
                      <h4 className="text-white font-semibold text-lg group-hover:text-[#00ff99] transition-colors duration-300">
                        {item.degree}
                      </h4>
                      <p className="text-[#00ff99] font-medium text-sm tracking-wide">
                        {item.institution}
                      </p>
                      <span className="text-gray-500 text-xs mt-2 inline-flex items-center gap-1.5 uppercase font-bold tracking-tighter">
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                <Code size={40} className="text-[#00ff99]" />
              </div>
            </motion.div>

            {/* Float Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00ff99]/10 rounded-full blur-2xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
