/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGithub 
} from 'react-icons/fa';

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 90 },
  { name: "CSS3", icon: FaCss3Alt, level: 85 },
  { name: "JavaScript", icon: FaJs, level: 80 },
  { name: "React", icon: FaReact, level: 75 },
  { name: "Bootstrap", icon: FaBootstrap, level: 70 },
  { name: "GitHub", icon: FaGithub, level: 75 }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl transition-all duration-300 hover:border-[#00ff99] hover:shadow-[0_0_25px_rgba(0,255,153,0.2)] active:border-[#00ff99] active:shadow-[0_0_25px_rgba(0,255,153,0.2)] cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-3xl text-gray-400 group-hover:text-[#00ff99] group-active:text-[#00ff99] transition-colors duration-300">
            <skill.icon />
          </div>
          <h3 className="text-white font-semibold tracking-wide group-hover:text-[#00ff99] group-active:text-[#00ff99] transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
        <span className="text-[#00ff99] font-mono font-bold text-sm tracking-tighter">
          {skill.level}%
        </span>
      </div>


      {/* Progress Bar Track */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* Animated Fill Bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
          className="h-full bg-[#00ff99] rounded-full shadow-[0_0_12px_rgba(0,255,153,0.6)] relative"
        >
          {/* Subtle glow effect on the bar tip */}
          <div className="absolute right-0 top-0 h-full w-2 bg-white/20 blur-[2px]"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#000000] py-20 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#00ff99] blur-[160px] opacity-10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-[#00ff99] mx-auto mt-4 rounded-full shadow-[0_0_15px_#00ff99]"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-6 text-lg font-light tracking-wide"
          >
            Technologies I work with
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
