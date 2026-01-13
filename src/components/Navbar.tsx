"use client";

import React, { useState, useEffect } from 'react';
import { Copyright, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`top-0 left-0 right-0 bg-[#22262f] text-white z-40 border-b border-[#555555] transition-all duration-300 ${isScrolled ? 'fixed' : 'relative'}`}>
            <div className="flex items-center justify-between h-14 px-4 md:px-0 md:ml-20">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleSmoothScroll(link.id)}
                            className="hover:text-blue-400 transition flex flex-row gap-1 items-center justify-center px-4 py-2 cursor-pointer"
                        >
                            <Copyright className="inline-block w-3 h-3 text-xs text-[#5188dd]" />
                            <span className='text-sm text-center'>{link.label}.java</span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex-1"></div>
                <button
                    className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-[#555555] bg-[#1c2128] p-4 space-y-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleSmoothScroll(link.id)}
                            className="w-full text-left block px-4 py-3 hover:bg-white/10 rounded-lg transition text-gray-300 hover:text-[#62aff3] flex items-center gap-2 cursor-pointer"
                        >
                            <Copyright className="inline-block w-3 h-3 text-[#5188dd]" />
                            <span className='text-sm'>{link.label}.java</span>
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};   