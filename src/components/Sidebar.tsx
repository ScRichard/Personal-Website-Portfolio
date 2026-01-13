"use client";

import { Folder, Github, Linkedin, Instagram } from 'lucide-react';

export default function Sidebar() {
  const socialLinks = [
    {
      icon: Github,
      label: "Github",
      url: "https://github.com/ScRichard"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/schmidtrich/"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/rchrd.sch"
    }
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen bg-[#191b22] p-1 flex-col w-20 items-center gap-1 z-50 border-gray-800 border-r">
        <div className="flex flex-col items-center justify-center transition-all bg-[#468be6] rounded-lg cursor-pointer w-16 h-16 p-2 hover:bg-[#3a7fd1]">
            <Folder className="w-6 h-6 text-gray-300" />
            <span className="text-xs text-gray-300 mt-1">Project</span>
        </div>
        {/* Splitter */}
        <div className="w-10 bg-[#2a2f35] h-0.5 my-2"></div>

        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center transition-all hover:bg-[#3c424a] rounded-lg cursor-pointer w-16 h-16 p-2"
            >
              <IconComponent className="w-6 h-6 text-gray-300" />
              <span className="text-xs text-gray-300 mt-1">{social.label}</span>
            </a>
          );
        })}
    </aside>
  );
}
