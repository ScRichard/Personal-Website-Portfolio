"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              O mne
            </span>
          </h2>
          <p className="text-gray-400">Poznaj môj príbeh a skúsenosti</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Kto som?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Som skúsený full-stack vývojár so špecializáciou na Java,
                TypeScript a moderné webové technológie. Moja vášeň spočíva v
                tvorbe komplexných aplikácií, ktoré kombinujú nádherný dizajn s
                robustnými backend systémami.
              </p>
            </div>

            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Moje zameranie
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Špecializujem sa na vývoj herných engínov, mikro-servisov a
                high-performance aplikácií. Vždy sa snažím dodržiavať SOLID
                princípy a best practices v čistom kóde.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                Prečo ja?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Viac ako 5 rokov skúseností v softvérovom vývoji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Hlboké znalosti v Java, Python, C++, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Skúsenosť s veľkými hermi (Minecraft modding)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Dôraz na kvalitu kódu a dokumentáciu</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Čo sme vytvorili?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Projekty v open-source komunite, herné engíny, webové
                aplikácie a systémy s milión+ riadkami kódu.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projektov", value: "15+" },
            { label: "Komunita", value: "1M+" },
            { label: "Rokov vývoja", value: "5+" },
            { label: "Technológií", value: "20+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
