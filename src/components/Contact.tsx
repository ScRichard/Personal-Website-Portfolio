"use client";

import { useState } from "react";
import { Github, Briefcase, Twitter, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Initialize EmailJS
  emailjs.init("4EUBqO8avT36mjapC");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage("");

    try {
      await emailjs.send(
        "service_ewdy9de",
        "template_4jhb3wp",
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      );

      setSubmitMessage("Message sent successfully! ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/ScRichard" },
    { name: "LinkedIn", icon: Briefcase, url: "https://www.linkedin.com/in/schmidtrich/" },
    { name: "Instagram", icon: Twitter, url: "https://instagram.com/rchrd.sch" },
    { name: "Email", icon: Mail, url: "mailto:me@richardschmidt.dev" }
  ];

  return (
    <section className="bg-[#1c2128] min-h-screen flex items-center justify-center p-4 md:p-8" id="contact">
      <div className="w-full max-w-5xl space-y-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            Get In <span className="text-[#62aff3]">Touch</span>
          </h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#62aff3] to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#62aff3] focus:outline-none focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#62aff3] focus:outline-none focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#62aff3] focus:outline-none focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#62aff3] focus:outline-none focus:bg-white/10 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-lg text-center font-semibold ${
                  submitMessage.includes("successfully") 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-linear-to-r from-[#62aff3] to-[#62aff3]/80 text-[#1c2128] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#62aff3]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#62aff3] font-semibold mb-1">Email</p>
                  <a href="mailto:me@richardschmidt.dev" className="text-gray-400 hover:text-[#62aff3] transition-colors">
                    me@richardschmidt.dev
                  </a>
                </div>
                <div>
                  <p className="text-[#62aff3] font-semibold mb-1">Location</p>
                  <p className="text-gray-400">Žilina, Slovakia</p>
                </div>
                <div>
                  <p className="text-[#62aff3] font-semibold mb-1">Availability</p>
                  <p className="text-gray-400">Open for freelance & full-time opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white text-xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-center text-gray-300 hover:bg-[#62aff3] hover:text-[#1c2128] hover:border-[#62aff3] transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <IconComponent size={18} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
