import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Languages, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const { t } = useTranslation();

  const facts = [
    { icon: GraduationCap, label: t('about.education'), value: t('about.educationVal') },
    { icon: MapPin, label: t('about.location'), value: t('about.locationVal') },
    { icon: Languages, label: t('about.languages'), value: t('about.languagesVal') },
    { icon: Award, label: t('about.certs'), value: t('about.certsVal') },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('about.title')} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-xl sm:text-2xl font-semibold leading-snug text-text">{t('about.p1')}</p>
            <p className="text-base sm:text-lg leading-relaxed text-muted">{t('about.p2')}</p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-navy text-white rounded-sm p-6 sm:p-8 divide-y divide-white/10"
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="grid place-items-center shrink-0 w-10 h-10 rounded-sm bg-accent text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">{label}</dt>
                  <dd className="mt-1 font-semibold leading-snug">{value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default About;
