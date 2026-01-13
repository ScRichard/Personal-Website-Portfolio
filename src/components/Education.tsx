"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#1c2128] min-h-screen flex items-center justify-center p-4 md:p-8" id="education">
      <motion.div 
        className="w-full max-w-4xl space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            <span className="text-[#62aff3]">Education</span>
          </h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#62aff3] to-transparent rounded-full mx-auto"></div>
        </motion.div>

        {/* Education Card */}
        <motion.div 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-linear-to-br from-[#62aff3] to-[#62aff3]/40">
                <BookOpen size={40} className="text-[#62aff3]" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Bachelor's Degree</h3>
                <p className="text-[#62aff3] text-2xl font-semibold">Computer Science</p>
                <p className="text-gray-400 text-lg font-medium mt-1">The University of Žilina</p>
              </div>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg">
                  <p className="text-gray-300 font-semibold">2025 - 2029</p>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-3">Currently Studying:</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>Software Engineering principles and best practices</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>Data Structures and Algorithms</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>Database Design and Management</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>Modern Web Technologies</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>Building practical projects and solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
