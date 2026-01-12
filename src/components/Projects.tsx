"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl" />
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
              Moje Projekty
            </span>
          </h2>
          <p className="text-gray-400">
            Skúrme najzaujímavejšie projekty z mojej kariéry
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full glassmorphism rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                {/* Header Section */}
                <div className="p-8 pb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="px-8 py-4 bg-purple-500/5 border-t border-purple-500/10">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">
                    Detaily:
                  </h4>
                  <ul className="space-y-2">
                    {project.details.slice(0, 3).map((detail, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-400 flex items-start"
                      >
                        <span className="text-blue-400 mr-2">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                    {project.details.length > 3 && (
                      <li className="text-xs text-gray-500 italic pt-1">
                        + {project.details.length - 3} ďalšie detaily
                      </li>
                    )}
                  </ul>
                </div>

                {/* Footer with Links */}
                <div className="px-8 py-4 flex gap-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5 border-t border-purple-500/10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={16} />
                      GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={16} />
                      Demo
                    </motion.a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 glassmorphism rounded-2xl border border-purple-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Ďalšie projekty
          </h3>
          <p className="text-gray-300 mb-6">
            Ďalšie zaujímavé projekty a príspevky nájdeš na mojom GitHub profile.
          </p>
          <motion.a
            href="https://github.com/ScRichard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            Navštív GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
