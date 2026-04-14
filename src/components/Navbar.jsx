import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 as Github, Mail, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ isDark, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.exp'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'rw', label: 'RW' },
    { code: 'sw', label: 'SW' },
    { code: 'tr', label: 'TR' },
  ];

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-3xl font-black text-accent tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              VM<span className="text-text">.</span>
            </span>
          </div>
          
          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text/70 hover:text-accent px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-cards border border-white/5 text-accent hover:text-text transition-all duration-300 shadow-lg shadow-black/10 transform hover:scale-105"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="flex items-center bg-cards border border-white/5 rounded-full px-4 py-2 shadow-inner">
              <Globe size={16} className="text-accent mr-3" />
              <select 
                value={i18n.language} 
                onChange={changeLanguage}
                className="bg-transparent text-text text-xs font-bold outline-none cursor-pointer appearance-none tracking-wider"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-cards text-text">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <a href="https://github.com/mugishavalens" target="_blank" rel="noopener noreferrer" className="text-text/50 hover:text-accent transition-all duration-300 transform hover:scale-110">
              <Github size={22} />
            </a>
            <a href="mailto:valensmugisha5@gmail.com" className="text-text/50 hover:text-accent transition-all duration-300 transform hover:scale-110">
              <Mail size={22} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-cards border border-white/5 text-accent hover:text-text shadow-lg"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center bg-cards/50 rounded-full px-2 py-1 border border-cards/50">
              <Globe size={14} className="text-accent mr-1" />
              <select 
                value={i18n.language} 
                onChange={changeLanguage}
                className="bg-transparent text-text text-xs outline-none cursor-pointer appearance-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-cards text-text">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-accent hover:bg-cards focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl absolute w-full left-0 top-full border-t border-cards animate-in slide-in-from-top-2 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text hover:text-accent block px-3 py-4 text-base font-medium border-b border-cards/50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 px-3 py-6 justify-center">
               <a href="https://github.com/mugishavalens" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
                <Github size={24} />
              </a>
              <a href="mailto:valensmugisha5@gmail.com" className="text-text hover:text-accent">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;