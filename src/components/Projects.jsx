import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

// Import project images
import reactLandingImg from "../assets/react-landing-img.png";
import weatherAppImg from "../assets/weather-app-img.png";
import counterAppImg from "../assets/counter-app-img.png";

const projects = [
  {
    title: "React Landing Page",
    description: "Modern responsive landing page with reusable components",
    image: reactLandingImg,
    tech: ["React", "Tailwind"],
    live: "https://megapack-react.netlify.app/",
    github: "https://github.com/MuhammadMoiz-stack/React-Landing-page",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using API integration",
    image: weatherAppImg,
    tech: ["JavaScript", "API"],
    live: "https://muhammadmoiz-stack.github.io/Weather-App/",
    github: "https://github.com/MuhammadMoiz-stack/Weather-App",
  },
  {
    title: "Counter App",
    description: "Interactive counter with DOM manipulation",
    image: counterAppImg,
    tech: ["JavaScript"],
    live: "https://muhammadmoiz-stack.github.io/JavaScript-counter-App/",
    github: "https://github.com/MuhammadMoiz-stack/JavaScript-counter-App",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-[#000000] py-20 px-6 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#00ff99] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#00ff99] opacity-5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-[#00ff99] mx-auto mt-4 rounded-full shadow-[0_0_15px_#00ff99]"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-5"
          >
            Some of my recent work
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#00ff99",
                boxShadow: "0 0 25px rgba(0, 255, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(index)}
              onTouchStart={() => handleCardClick(index)}
              className={`group bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-150 cursor-pointer touch-manipulation active:opacity-80 ${
                activeCard === index
                  ? "border-[#00ff99] shadow-[0_0_25px_rgba(0,255,153,0.3)] scale-[1.05]"
                  : "border-gray-800"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden touch-manipulation">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    activeCard === index ? "scale-110" : ""
                  }`}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200/0a0a0a/00ff99?text=Project+Preview";
                  }}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-all duration-300 ${
                    activeCard === index
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                  }`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff99] text-white hover:bg-[#00ff99] hover:text-black active:bg-[#00ff99] active:text-black transition-all duration-150 text-sm font-medium z-20 touch-manipulation"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff99] text-white hover:bg-[#00ff99] hover:text-black active:bg-[#00ff99] active:text-black transition-all duration-150 text-sm font-medium z-20 touch-manipulation"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>


              {/* Text Content */}
              <div className="p-5">
                <h3
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    activeCard === index ? "text-[#00ff99]" : "text-white"
                  } group-hover:text-[#00ff99]`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-black border border-gray-700 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

