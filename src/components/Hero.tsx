"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations";

const Hero = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Richard Schrotter
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full-Stack Developer & Game Engineer
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Vyvíjam moderné webové aplikácie a komplexné herné systémy s dôrazom
            na čistý kód, SOLID princípy a inovatívne riešenia.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pozri moje projekty
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontaktuj ma
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center items-center"
        >
          <motion.a
            href="https://github.com/ScRichard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaEnvelope size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
