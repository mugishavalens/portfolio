import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = ['en', 'fr', 'rw', 'sw', 'tr'];

const LanguageSelect = ({ value, onChange, className = '' }) => (
  <label className={`relative flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs font-bold uppercase tracking-wider text-text ${className}`}>
    <Globe size={14} className="text-accent" aria-hidden="true" />
    <span className="sr-only">Language</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent outline-none cursor-pointer appearance-none uppercase"
    >
      {languages.map((code) => (
        <option key={code} value={code} className="bg-surface text-text">{code.toUpperCase()}</option>
      ))}
    </select>
  </label>
);

const Navbar = ({ isDark, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lang = (i18n.resolvedLanguage || 'en').split('-')[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.exp'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const ThemeButton = (
    <button
      onClick={toggleTheme}
      className="grid place-items-center w-10 h-10 rounded-full border border-line text-text hover:text-accent hover:border-accent transition-colors"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-md border-b border-line py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Valens Mugisha, home">
          <span className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-navy text-white text-[15px] font-extrabold tracking-tight leading-none ring-2 ring-accent/0 hover:ring-accent transition">
            <span className="flex items-baseline">
              VM<span className="text-accent text-lg leading-none">.</span>
            </span>
          </span>
          <span className="hidden sm:block text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-text">
            {t('nav.role1')}<br />{t('nav.role2')}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-text/75 hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelect value={lang} onChange={(l) => i18n.changeLanguage(l)} />
          {ThemeButton}
          <a href="#contact" className="ml-1 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-accent-strong transition-colors">
            {t('nav.hire')}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelect value={lang} onChange={(l) => i18n.changeLanguage(l)} className="py-1.5" />
          {ThemeButton}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="grid place-items-center w-10 h-10 rounded-full bg-navy text-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-background border-b border-line shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3.5 border-b border-line text-base font-semibold text-text hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-accent py-3 text-center font-bold text-white"
            >
              {t('nav.hire')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
