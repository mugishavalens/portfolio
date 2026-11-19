import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ExternalLink, PlayCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

// Dates from the CV.
const items = [
  { key: 'i1', start: '2026', end: null, site: 'https://auca.ac.rw/', video: 'https://www.youtube.com/watch?v=bbcpV5uklM0' },
  { key: 'i2', start: '2025', end: null, site: 'https://a2sv.org/' },
  { key: 'i3', start: '2025', end: '2025', site: 'https://thegym.rw/' },
  { key: 'i4', start: '2024', end: '2024' },
  { key: 'i5', start: '2024', end: null, site: 'https://auca.ac.rw/', education: true },
];

const Experience = () => {
  const { t } = useTranslation();
  const period = (start, end) => (end === start ? start : `${start} – ${end ?? t('exp.present')}`);

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('exp.title')} />

        <ol className="border-t border-line">
          {items.map(({ key, start, end, site, video, education }, i) => {
            const Icon = education ? GraduationCap : Briefcase;
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 border-b border-line"
              >
                <div className="md:col-span-3 flex items-center md:items-start gap-3">
                  <span className={`grid place-items-center shrink-0 w-10 h-10 rounded-full text-white ${i === 0 ? 'bg-accent' : 'bg-navy'}`}>
                    <Icon size={18} />
                  </span>
                  <span className="font-display text-xl sm:text-2xl leading-10 text-text">{period(start, end)}</span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-text group-hover:text-accent transition-colors">
                    {t(`exp.${key}.org`)}
                  </h3>
                  <p className="text-sm font-bold text-accent">{t(`exp.${key}.role`)}</p>
                  <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{t(`exp.${key}.desc`)}</p>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-start gap-2">
                  {video && (
                    <a href={video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs font-bold text-text hover:border-accent hover:text-accent transition-colors">
                      <PlayCircle size={14} /> {t('exp.video')}
                    </a>
                  )}
                  {site && (
                    <a href={site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs font-bold text-text hover:border-accent hover:text-accent transition-colors">
                      <ExternalLink size={14} /> {t('exp.site')}
                    </a>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
