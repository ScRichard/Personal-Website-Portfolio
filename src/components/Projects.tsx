"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Gothaj Next Gen",
      subtitle: "Open-source Minecraft 1.8.9 Hack Client",
      description: "A sophisticated Minecraft client focused on bypassing anti-cheat systems, exploiting game mechanics, and enhancing player capabilities.",
      features: [
        "Custom EventBus system for extensibility",
        "Shader handling via LWJGL",
        "C++ anti-leak protection components",
        "Integrated IRC chat system",
        "Custom Cape synchronization system",
        "SOLID principles implementation"
      ],
      tech: ["Java", "Gradle", "LWJGL", "C++", "OpenGL"],
      link: "https://github.com/ScRichard/Gothaj-Next-Gen",
      github: true
    },
    {
      title: "Uni 7",
      subtitle: "Isometric Game Development Project",
      description: "A semester project game built with Java and JavaFX, featuring isometric view with robust collision systems and game logic implementation.",
      features: [
        "Isometric rendering system",
        "Collision and physics systems",
        "Game logic architecture",
        "SOLID design principles",
        "Comprehensive JUnit testing",
        "Custom coordinate-based rendering (x, y, z)"
      ],
      tech: ["Java", "JavaFX", "JUnit", "Rendering"],
      link: "https://github.com/ScRichard/Uni7",
      github: true
    }
  ];

  return (
    <section className="bg-[#1c2128] min-h-screen flex items-center justify-center p-4 md:p-8" id="projects">
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
            Featured <span className="text-[#62aff3]">Projects</span>
          </h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#62aff3] to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#62aff3] text-lg font-semibold">{project.subtitle}</p>
              </div>

              <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>

              <div>
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-2">
                      <span className="text-[#62aff3] mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 text-[#62aff3] rounded-lg text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                {project.github ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-linear-to-r from-[#62aff3] to-[#62aff3]/80 text-[#1c2128] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#62aff3]/50 transition-all duration-300"
                  >
                    View on GitHub →
                  </a>
                ) : (
                  <button className="px-6 py-3 bg-linear-to-r from-[#62aff3] to-[#62aff3]/80 text-[#1c2128] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#62aff3]/50 transition-all duration-300">
                    View Project →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
