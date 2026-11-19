import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '2+', label: t('hero.years') },
    { value: '7', label: t('hero.projects') },
    { value: '4', label: t('hero.langs') },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* ornaments */}
      <div className="dot-grid absolute top-24 left-1/2 w-28 h-16 hidden md:block" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="hidden lg:flex absolute right-0 -top-2 items-start gap-3 text-right">
          <p className="max-w-[11rem] text-[11px] font-bold uppercase leading-snug tracking-[0.16em] text-text">{t('hero.tagline')}</p>
          <ArrowUpRight size={36} strokeWidth={2.25} className="text-accent -mt-1" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 min-w-0"
          >
            <h1 className="font-display uppercase leading-[0.92] tracking-tight text-[clamp(3.25rem,10vw,8.5rem)] break-words">
              <span className="block text-accent">{t('hero.word1')}</span>
              <span className="block text-text">{t('hero.word2')}</span>
            </h1>

            <div className="w-24 h-1 bg-accent my-7 sm:my-9" aria-hidden="true"></div>

            <p className="text-2xl sm:text-3xl font-semibold text-text">{t('hero.hello', { name: 'Valens' })}</p>
            <p className="mt-3 max-w-lg text-base sm:text-lg leading-relaxed text-muted">{t('hero.desc')}</p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white hover:bg-accent-strong transition-colors"
              >
                {t('hero.viewWork')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/cv/Valens_Mugisha_CV.pdf"
                download="Valens_Mugisha_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border-2 border-text px-7 py-3 text-sm font-bold text-text hover:bg-text hover:text-background transition-colors"
              >
                <Download size={18} />
                {t('hero.downloadCV')}
              </a>
            </div>

            <dl className="mt-10 sm:mt-12 grid grid-cols-3 sm:flex">
              {stats.map((s, i) => (
                <div key={s.label} className={`pr-3 sm:pr-10 ${i > 0 ? 'pl-3 sm:pl-10 border-l border-line' : ''}`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl sm:text-5xl leading-none text-accent">{s.value}</dd>
                  <dd className="mt-2 max-w-[7rem] text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-text">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            {/* orange circle top-right, mint circle bottom-left — as in the reference */}
            <div className="absolute -right-6 sm:-right-10 top-6 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-accent" aria-hidden="true"></div>
            <div className="absolute -left-8 bottom-4 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-mint" aria-hidden="true"></div>
            <div className="hatch absolute left-2 -bottom-4 w-20 h-12 opacity-80 hidden sm:block" aria-hidden="true"></div>

            {/* Arch frame; multiply blends the photo's white backdrop into the frame colour */}
            <div className="relative isolate mx-auto w-[82%] aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-[#d6ebe5] shadow-2xl shadow-navy/20">
              <img
                src={profileImg}
                alt="Valens Mugisha"
                className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply scale-110 origin-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
