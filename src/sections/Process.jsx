import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, FlaskConical, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

const steps = [
  { key: 'p1', icon: Search },
  { key: 'p2', icon: PenTool },
  { key: 'p3', icon: Code2 },
  { key: 'p4', icon: FlaskConical },
  { key: 'p5', icon: Rocket },
];

const Process = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('process.title')} />

        <ol className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {/* connecting dashed line behind the circles (desktop) */}
          <span className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] border-t-2 border-dashed border-text/25" aria-hidden="true"></span>
          {steps.map(({ key, icon: Icon }, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="font-display text-lg text-text">{String(i + 1).padStart(2, '0')}</span>
              <span className="relative mt-2 grid place-items-center w-14 h-14 rounded-full bg-accent text-white ring-8 ring-background">
                <Icon size={22} />
              </span>
              <p className="mt-4 font-extrabold uppercase tracking-wide text-sm text-text">{t(`process.${key}.t`)}</p>
              <p className="mt-1 max-w-[12rem] text-sm text-muted leading-relaxed">{t(`process.${key}.d`)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
