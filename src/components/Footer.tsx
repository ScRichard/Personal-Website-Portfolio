import React from "react";
import { Github, Linkedin, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "me@richardschmidt.dev",
      href: "mailto:me@richardschmidt.dev"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "rchrd.sch",
      href: "https://instagram.com/rchrd.sch"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Žilina, Slovakia",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "schmidtrich",
      href: "https://www.linkedin.com/in/schmidtrich/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ScRichard",
      href: "https://github.com/ScRichard"
    }
  ];

  return (
    <footer className="bg-[#1c2128] text-white py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#62aff3]">Richard Schmidt</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer creating elegant digital experiences with modern technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#62aff3] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-[#62aff3] transition-colors flex items-center gap-2"
                    >
                      <IconComponent size={16} />
                      <span>{info.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Richard Schmidt. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
