import React from 'react';
import { motion } from 'framer-motion';
import techneekxLogo from '../assets/Experience/hopex4.jpg';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#f8fafc] py-16 md:py-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/5 border border-black/5 rounded-full">
              Experience
            </span>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group relative bg-white border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex-1 text-center md:text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight">
              AI/ML Head & Core Member
            </h3>
            <div className="text-[#2a5aff] font-bold text-xl mb-6">
              TechNeekX
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              Leading the Artificial Intelligence and Machine Learning initiatives. 
              We are a passionate community of tech enthusiasts exploring the frontiers of AI, building impactful projects, and learning together. 
              <br /><br />
              Join us to be a part of the next generation of tech innovators!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="https://teamtechneekx.netlify.app" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-[#2a5aff] hover:shadow-[0_0_20px_rgba(42,90,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Join TechNeekX
              </a>
              <a 
                href="mailto:teamtechneekx@gmail.com" 
                className="px-8 py-3.5 bg-blue-50 text-[#2a5aff] border border-blue-100 text-sm font-semibold rounded-full hover:bg-[#2a5aff] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden md:flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-gray-100 shadow-lg shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(42,90,255,0.2)] transition-all duration-500 overflow-hidden">
             <img src={techneekxLogo} alt="TechNeekX Logo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
