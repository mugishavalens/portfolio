import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stat1'), value: "2+", desc: t('about.stat1Desc') },
    { label: t('about.stat2'), value: "12+", desc: t('about.stat2Desc') },
    { label: t('about.stat3'), value: "A2SV", desc: t('about.stat3Desc') },
    { label: t('about.stat4'), value: "Modern", desc: t('about.stat4Desc') }
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('about.title')} <span className="text-accent">{t('about.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-text/80 text-lg sm:text-xl leading-relaxed clamp-about">
                {t('about.p1', { org: 'African University of Central Africa (AUCA)' })}
              </p>
              <p className="text-text/80 text-lg sm:text-xl leading-relaxed clamp-about">
                {t('about.p2', { 
                  clean: 'clean architecture', 
                  efficiency: 'algorithmic efficiency', 
                  a2sv: 'Africa To Silicon Valley (A2SV)' 
                })}
              </p>
              <p className="text-text/80 text-lg sm:text-xl leading-relaxed clamp-about">
                {t('about.p3')}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cards p-8 rounded-2xl border border-white/5 shadow-xl shadow-black/20 hover:border-accent/30 transition-all duration-300 group"
              >
                <h3 className="text-accent font-mono font-bold text-4xl mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">{stat.value}</h3>
                <p className="text-text font-bold mb-1">{stat.label}</p>
                <p className="text-text/60 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
