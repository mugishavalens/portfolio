import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, ShieldCheck, BrainCircuit, Binary } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

// Stack taken from the CV's Technical Skills section.
const stack = [
  { key: 'g1', items: ['Python', 'Java', 'PHP', 'JavaScript', 'SQL', 'Dart', 'C#'] },
  { key: 'g2', items: ['Django', 'Django REST Framework', 'Spring Boot', 'REST APIs'] },
  { key: 'g3', items: ['HTML', 'CSS', 'React', 'MySQL', 'SQLite'] },
  { key: 'g4', items: ['DHCP', 'RIPv2', 'SSH', 'Cisco Packet Tracer', 'Vulnerability assessment', 'Penetration testing'] },
  { key: 'g5', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'NetBeans'] },
  { key: 'g6', items: ['LeetCode', 'HackerRank', 'Codewars', 'Codeforces'] },
];

const services = [
  { key: 's1', icon: Server },
  { key: 's2', icon: Layers },
  { key: 's3', icon: ShieldCheck },
  { key: 's4', icon: BrainCircuit },
  { key: 's5', icon: Binary },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('skills.title')} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted">{t('skills.servicesTitle')}</h3>
            <ul className="space-y-5">
              {services.map(({ key, icon: Icon }, i) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="grid place-items-center shrink-0 w-11 h-11 rounded-sm bg-accent text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-extrabold uppercase tracking-wide text-sm text-text">{t(`skills.${key}.t`)}</p>
                    <p className="mt-0.5 text-sm text-muted leading-relaxed">{t(`skills.${key}.d`)}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-14 relative">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted">{t('skills.stackTitle')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {stack.map(({ key, items }) => (
                <div key={key}>
                  <p className="pb-2 mb-3 border-b-2 border-text text-sm font-extrabold uppercase tracking-wide text-text">{t(`skills.${key}`)}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-surface border border-line text-text/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="dot-grid absolute -bottom-6 right-0 w-40 h-8 hidden lg:block" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
