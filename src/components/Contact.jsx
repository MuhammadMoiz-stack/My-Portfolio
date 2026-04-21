/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="relative bg-[#000000] py-20 px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00ff99] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-bold tracking-tight uppercase"
          >
            Contact Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-2"
          >
            Let’s build something amazing together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Left Side: Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#00ff99] text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                I’m available for freelance work and collaborations. If you have a project in mind or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a0a0a] border border-gray-800 group-hover:border-[#00ff99] transition-all duration-300">
                  <Phone className="text-[#00ff99]" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">+92 329-3026214</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a0a0a] border border-gray-800 group-hover:border-[#00ff99] transition-all duration-300">
                  <Mail className="text-[#00ff99]" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">reachmoizakhter@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a0a0a] border border-gray-800 group-hover:border-[#00ff99] transition-all duration-300">
                  <MapPin className="text-[#00ff99]" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-white font-medium mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/MuhammadMoiz-stack/" 
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-moiz-6744682b8/" 
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-gray-400 text-sm mb-2" htmlFor="name">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-[#00ff99] focus:shadow-[0_0_15px_rgba(0,255,153,0.1)] outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2" htmlFor="email">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-[#00ff99] focus:shadow-[0_0_15px_rgba(0,255,153,0.1)] outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2" htmlFor="message">Your Message</label>
                    <textarea 
                      required
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell me about your project..."
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-[#00ff99] focus:shadow-[0_0_15px_rgba(0,255,153,0.1)] outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 153, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-black border border-[#00ff99] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00ff99] hover:text-black transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-[#00ff99]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-[#00ff99]" size={40} />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
