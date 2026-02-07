'use client';

import { useState } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' }
  ];

  return (
    <section id="about" className="bg-black text-white flex flex-col md:w-1/2 mx-auto px-4 py-4">

      <div className="text-xl mb-3 underline underline-offset-4">
        Contact
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-white/30 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-white/30 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-black border border-white/30 rounded-lg text-white focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <a
                type="submit"
                className="bg-white w-20 h-12 text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </a>
            </form>

            {/* Socials */}
            <div className="mt-8 pt-8 border-t border-white/30">
              <h3 className="text-lg font-semibold text-center mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-white hover:text-gray-300 transition-colors"
                      title={social.name}
                    >
                      <Icon size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
    
    </section>
  );
}
