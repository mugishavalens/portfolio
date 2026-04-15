import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_20%)] pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/90 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent uppercase tracking-[0.24em] shadow-sm shadow-accent/10">
            {t('hero.available')}
          </div>

          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-text">
              {t('hero.title')} <br />
              <span className="text-gradient">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-text/80 text-lg md:text-xl leading-relaxed max-w-xl">
              {t('hero.desc', { name: 'Valens Mugisha' })}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-10 py-4 text-sm font-bold text-background transition-all duration-200 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              {t('hero.viewWork')}
              <ArrowRight size={20} className="ml-3 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="/cv/Valens_Mugisha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-cards/20 bg-cards/80 px-10 py-4 text-sm font-bold text-text transition-all duration-200 hover:border-accent/50 hover:bg-cards/90 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <Download size={20} className="text-accent mr-3" />
              {t('hero.downloadCV')}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-cards/20 bg-cards/90 p-6 shadow-xl shadow-black/20 backdrop-blur-sm">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-text/50 mb-3">Experience</p>
              <p className="text-3xl font-bold text-text">2+ yrs</p>
              <p className="mt-3 text-text/70 text-sm leading-relaxed">Building scalable web apps and data-driven solutions with clean architecture.</p>
            </div>
            <div className="rounded-3xl border border-cards/20 bg-cards/90 p-6 shadow-xl shadow-black/20 backdrop-blur-sm">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-text/50 mb-3">Focus</p>
              <p className="text-3xl font-bold text-text">Modern UI</p>
              <p className="mt-3 text-text/70 text-sm leading-relaxed">Creating polished, high-contrast experiences inspired by professional design systems.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden md:block"
        >
          <div className="absolute -top-12 -right-8 w-44 h-44 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute -bottom-12 left-4 w-56 h-56 rounded-full bg-accent/10 blur-3xl"></div>

          <div className="relative rounded-[2.5rem] border border-cards/20 bg-cards/95 p-3 shadow-xl shadow-black/25 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[2.2rem] border border-cards/10">
              <img
                src={profileImg}
                alt="Valens Mugisha"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
