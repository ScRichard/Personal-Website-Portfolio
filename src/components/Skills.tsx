"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const Skills = () => {
  const categoryColors: { [key: string]: string } = {
    "Language Skills": "from-purple-500 to-pink-500",
    "Frameworks & Libraries": "from-blue-500 to-cyan-500",
    "Soft Skills": "from-green-500 to-emerald-500",
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Moje Skúsenosti
            </span>
          </h2>
          <p className="text-gray-400">Technológie a nástroje, ktoré používam</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {SKILLS.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              variants={staggerItem}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="glassmorphism rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                {/* Category Header */}
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${
                      categoryColors[skillCategory.category]
                    } bg-clip-text text-transparent`}
                  >
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="flex items-start text-gray-300 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-purple-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform">
                        ▸
                      </span>
                      <span className="group-hover/item:text-purple-300 transition-colors">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-8 glassmorphism rounded-2xl border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Aktívny Vývoj
          </h3>
          <p className="text-gray-300">
            Currently learning and exploring Rust, WebAssembly, a pokračujem v
            hlbšej špecializácii na cloud-native aplikácie. Vždy sa snažím
            byť na čele noviniek v technológiách.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
