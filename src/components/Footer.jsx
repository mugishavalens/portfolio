import React from 'react';
import { Code2 as Github, UserRound as Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-black text-accent tracking-tighter">VM<span className="text-text">.</span></span>
          </div>
          <p className="text-text/70 text-base leading-relaxed">
            Professional software engineering with a focus on modern web applications, data-driven systems, and end-to-end product delivery.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-10">
          <div className="space-y-2">
            <p className="text-text/40 uppercase tracking-[0.24em] text-xs font-semibold">Contact</p>
            <a href="mailto:valensmugisha5@gmail.com" className="text-text hover:text-accent transition-colors">
              valensmugisha5@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-text/40 uppercase tracking-[0.24em] text-xs font-semibold">Follow</p>
            <div className="flex items-center gap-5">
              <a href="https://github.com/mugishavalens" target="_blank" rel="noopener noreferrer" className="text-text/40 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-text/40 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Linkedin size={22} />
              </a>
              <a href="mailto:valensmugisha5@gmail.com" className="text-text/40 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/5 pt-6 text-center text-text/40 text-sm">
        © {new Date().getFullYear()} Valens Mugisha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
