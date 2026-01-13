"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C", "C++", "TypeScript", "HTML5", "CSS3", "Rust", "Kotlin"]
    },
    {
      category: "Libraries & Frameworks",
      skills: ["Spring Boot", "React", "Next.js", "Tailwind CSS", "Django", "FastAPI", "LWJGL", "OpenGL", "JavaFX", "JUnit", "Gradle", "NumPy", "Pandas"]
    },
    {
      category: "Soft Skills",
      skills: ["Analytical Thinking", "Problem Solving", "Complex Issue Resolution", "Clean Code", "Learning Mindset", "Self-Motivation", "Responsibility", "Independent Work"]
    }
  ];

  return (
    <section className="bg-[#1c2128] min-h-screen flex items-center justify-center p-4 md:p-8" id="skills">
      <motion.div 
        className="w-full max-w-6xl space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            <span className="text-[#62aff3]">Skills</span> & Expertise
          </h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#62aff3] to-transparent rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#62aff3] text-xl font-bold mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-semibold hover:text-[#62aff3] hover:border-[#62aff3] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Philosophy */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
          <h3 className="text-white text-2xl font-bold mb-8">Development Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[#62aff3] font-bold text-lg">My Approach</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#62aff3]">→</span>
                  <span className="text-gray-300">Writing clean, maintainable and readable code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#62aff3]">→</span>
                  <span className="text-gray-300">Solving complex problems with analytical thinking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#62aff3]">→</span>
                  <span className="text-gray-300">Continuous learning and exploring new technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#62aff3]">→</span>
                  <span className="text-gray-300">Taking responsibility and working independently</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#c25647] font-bold text-lg">Key Strengths</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#c25647]">✨</span>
                  <span className="text-gray-300">Problem-solving mentality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c25647]">✨</span>
                  <span className="text-gray-300">Self-motivated and independent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c25647]">✨</span>
                  <span className="text-gray-300">Passion for clean and efficient code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c25647]">✨</span>
                  <span className="text-gray-300">Eager to learn and adapt quickly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
