'use client';

import { useState } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/ScRichard' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/rchrd.sch' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/schmidtrich/' }
  ];

  return (
    <section id="contact" className="text-white flex flex-col md:w-3xl mx-auto px-4 py-4">

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
              
              {status === 'success' && (
                <div className="bg-green-900/30 border border-green-500 text-green-400 p-3 rounded-lg text-sm">
                  ✓ Email sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
                  ✗ Failed to send email. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-white/30">
              <div className="flex justify-center gap-6">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-white hover:text-gray-300 text-sm transition-colors"
                      title={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
    
    </section>
  );
}
