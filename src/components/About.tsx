"use client";

import { Sparkles, Zap, Users, BookMarked } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="bg-[#1c2128] min-h-screen flex items-center justify-center p-4 md:p-8" id="about">
      <motion.div 
        className="w-full max-w-4xl space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-[#62aff3]">Me</span>
          </h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#62aff3] to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {/* Main Glass Card */}
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12"
            variants={itemVariants}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-center">
              <p>
                I&apos;m Richard Schmidt, a passionate full-stack developer with a love for building elegant solutions to complex problems. With expertise in modern web technologies and a strong foundation in software engineering, I create applications that are not just functional but delightful to use.
              </p>

              <p>
                My journey in tech started with curiosity and has evolved into a career dedicated to continuous learning and innovation. I&apos;m driven by the challenge of turning ideas into reality and helping teams build products that make an impact.
              </p>

              <p>
                When I&apos;m not coding, I love to exercise, explore new places by traveling, and spend time on my other favorite hobbies. I believe in maintaining a healthy work-life balance and constantly challenging myself both professionally and personally. I believe in writing clean, maintainable code and collaborating effectively with teams to achieve shared goals.
              </p>
            </div>
          </motion.div>

          {/* Core Values Card */}
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-[#62aff3] font-semibold mb-6 text-2xl text-center">Core Values</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <Sparkles size={24} className="text-[#62aff3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Code Quality</p>
                  <p className="text-gray-400 text-sm">Writing clean, readable, and maintainable code</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <Zap size={24} className="text-[#62aff3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Performance</p>
                  <p className="text-gray-400 text-sm">Building fast and efficient applications</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <Users size={24} className="text-[#62aff3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Collaboration</p>
                  <p className="text-gray-400 text-sm">Working effectively with teams and communities</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariants}>
                <BookMarked size={24} className="text-[#62aff3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Continuous Learning</p>
                  <p className="text-gray-400 text-sm">Always exploring new technologies and best practices</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
