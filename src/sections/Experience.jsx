import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExperienceItem = ({ title, organization, period, description, isEducation }) => (
  <motion.div
    initial={{ opacity: 0, x: isEducation ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-16 border-l-2 border-white/5 last:pb-0"
  >
    <div className="absolute left-[-17px] top-0 p-3 bg-cards border border-white/10 rounded-xl text-accent shadow-xl shadow-black/20 group-hover:border-accent/50 transition-colors">
      {isEducation ? <GraduationCap size={20} /> : <Briefcase size={20} />}
    </div>
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <h3 className="text-2xl font-bold text-text">{title}</h3>
      <span className="px-4 py-1.5 bg-background text-xs font-mono font-bold text-accent rounded-full border border-accent/20 tracking-wider">
        {period}
      </span>
    </div>
    <h4 className="text-accent/90 font-bold text-lg mb-4 flex items-center gap-2">
      <span className="w-4 h-[2px] bg-accent/40"></span>
      {organization}
    </h4>
    <p className="text-text/70 text-base leading-relaxed max-w-2xl bg-cards/50 p-6 rounded-2xl border border-white/5 shadow-lg shadow-black/10">
      {description}
    </p>
  </motion.div>
);

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('exp.items.i1.org'),
      organization: t('exp.items.i1.role'),
      period: "2026 - PRESENT",
      description: t('exp.items.i1.desc'),
      isEducation: false
    },
    {
      title: t('exp.items.i2.org'),
      organization: t('exp.items.i2.role'),
      period: "2025 - PRESENT",
      description: t('exp.items.i2.desc'),
      isEducation: false
    },
    {
      title: t('exp.items.i3.org'),
      organization: t('exp.items.i3.role'),
      period: "2025",
      description: t('exp.items.i3.desc'),
      isEducation: false
    },
    {
      title: t('exp.items.i4.role'),
      organization: t('exp.items.i4.org'),
      period: "2024 - PRESENT",
      description: t('exp.items.i4.desc'),
      isEducation: true
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('exp.title')} <span className="text-accent">{t('exp.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
