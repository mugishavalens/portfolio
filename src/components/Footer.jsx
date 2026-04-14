import React from 'react';
import { Code2 as Github, UserRound as Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-black text-accent tracking-tighter">VM<span className="text-text">.</span></span>
          <span className="text-text/40 font-mono text-sm tracking-widest ml-4 uppercase">© {new Date().getFullYear()} {t('footer.rights')}</span>
        </div>
        
        <div className="flex items-center gap-8">
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
        
        <div className="text-text/40 flex items-center gap-3 text-sm font-mono uppercase tracking-widest">
          {t('footer.made')} <Heart size={16} className="text-accent animate-pulse" /> by <span className="text-text/60 font-bold tracking-normal normal-case">Valens Mugisha</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
