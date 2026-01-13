"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="bg-[#1c2128] min-h-screen flex flex-col items-center justify-center pt-20 p-4 md:p-8">
      <motion.div 
        className="w-full max-w-4xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glass Morphism Card - Main Content */}
        <motion.div 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16"
          variants={itemVariants}
        >
          <div className="space-y-8">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Richard Schmidt
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-[#62aff3] to-transparent rounded-full"></div>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Full-Stack Developer crafting elegant digital experiences
              </p>
              <p className="text-gray-400 mt-3 text-lg">
                Building the future with <span className="text-[#62aff3]">modern technologies</span> and <span className="text-[#c25647]">creative vision</span>
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="border-l-2 border-[#62aff3] pl-6"
              variants={itemVariants}
            >
              <p className="text-gray-300 italic text-lg leading-relaxed">
                &quot;Code is poetry written in logic. Every line is a chance to create something meaningful.&quot;
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Glass Morphism Cards - Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {/* Tech Stack */}
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group"
            variants={cardVariants}
          >
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-[#62aff3] to-[#62aff3]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">{"</>"}</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Tech Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              React • Next.js • TypeScript • Tailwind CSS • Node.js
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group"
            variants={cardVariants}
          >
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-[#c25647] to-[#c25647]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Expertise</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Development • Performance Optimization • UI/UX Design
            </p>
          </motion.div>

          {/* Focus */}
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group"
            variants={cardVariants}
          >
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-[#62aff3] to-[#c25647] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">✨</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Philosophy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clean Code • User-Centric Design • Continuous Learning
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          variants={itemVariants}
        >
          <button 
            onClick={() => handleSmoothScroll('projects')}
            className="group relative px-8 py-4 bg-linear-to-r from-[#62aff3] to-[#62aff3]/80 text-[#1c2128] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#62aff3]/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleSmoothScroll('contact')}
            className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 text-gray-300 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}