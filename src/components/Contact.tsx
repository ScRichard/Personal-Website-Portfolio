"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ScRichard",
      icon: FaGithub,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: FaLinkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: FaEnvelope,
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: FaTwitter,
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Buďme v kontakte
            </span>
          </h2>
          <p className="text-gray-400">
            Mám vás pomôcť pri vašom nasledujúcom projekte?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="glassmorphism p-8 rounded-2xl border border-purple-500/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              Pošli mi správu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meno
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Tvoje meno"
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="tvoj@email.com"
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Správa
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tvoja správa..."
                  rows={5}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Poslať správu
              </motion.button>

              {submitted && (
                <motion.div
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Ďakujem za správu! Odpovím Ti čoskoro.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quick Contact Info */}
            <div className="glassmorphism p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Rýchly Kontakt
              </h3>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <FaEnvelope className="text-pink-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaGithub className="text-gray-300" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a
                      href="https://github.com/ScRichard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      @ScRichard
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaLinkedin className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      Richard Schrotter
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="glassmorphism p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Nasleduj ma
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-gray-300 ${link.color} transition-all group`}
                      whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent size={24} />
                      <span className="font-medium text-sm">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
