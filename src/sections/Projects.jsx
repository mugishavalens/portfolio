import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plane, LayoutDashboard, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';
import goRwandaImg from '../assets/projects/go-rwanda.jpg';
import cyberguardImg from '../assets/projects/cyberguard.jpg';
import bistroImg from '../assets/projects/bistro.jpg';
import simbaImg from '../assets/projects/simba.jpg';
import kimchiImg from '../assets/projects/kimchi.jpg';

// Ordered best-first. Live sites only; no repository links.
const liveProjects = [
  {
    key: 'goRwanda',
    title: 'Go Rwanda',
    kind: 'Bus booking SaaS',
    url: 'https://go-rw-frontend.vercel.app/',
    image: goRwandaImg,
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.IO'],
  },
  {
    key: 'cyberguard',
    title: 'CyberGuard AI',
    kind: 'Cybersecurity platform',
    url: 'https://cyber-gurad.netlify.app/',
    image: cyberguardImg,
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI detection'],
  },
  {
    key: 'bistro',
    title: 'The Bistro',
    kind: 'Restaurant web app',
    url: 'https://the-bistro-980958970412.europe-west2.run.app/',
    image: bistroImg,
    tech: ['Full-stack', 'Google Cloud Run'],
  },
  {
    key: 'simba',
    title: 'Simba Store',
    kind: 'E-commerce',
    url: 'https://simba-v0.netlify.app/#/',
    image: simbaImg,
    tech: ['JavaScript', 'AI search', 'i18n'],
  },
  {
    key: 'kimchi',
    title: 'Kimchi Restaurant',
    kind: 'Restaurant website',
    url: 'https://incredible-tulumba-a4e81d.netlify.app/',
    image: kimchiImg,
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const teamProjects = [
  { key: 'navexa', title: 'Navexa', kind: 'Aviation services platform', icon: Plane, tech: ['Django', 'Python', 'JavaScript'] },
  { key: 'mdmis', title: 'MDMIS', kind: 'Management information system', icon: LayoutDashboard, tech: ['Web application'] },
];

const ProjectCard = ({ index, project, large }) => {
  const { t } = useTranslation();
  const number = String(index + 1).padStart(2, '0');
  const badge = index % 2 === 0 ? 'bg-navy' : 'bg-accent';

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col bg-surface border border-line rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15 transition-all duration-300"
    >
      <div className="relative flex">
        <span className={`${badge} shrink-0 flex items-start justify-center pt-4 ${large ? 'w-16 sm:w-20' : 'w-14'} font-display ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'} text-white`}>
          {number}
        </span>
        <div className={`relative flex-1 overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}>
          <img
            src={project.image}
            alt={`${project.title} homepage`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className={`flex flex-col flex-1 ${large ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`}>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{project.kind}</p>
        <h3 className={`mt-1.5 font-extrabold uppercase tracking-wide text-text ${large ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
          {project.title}
        </h3>
        <p className={`mt-3 text-muted leading-relaxed ${large ? 'text-base' : 'text-sm'}`}>{t(`projects.${project.key}`)}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-background text-text/80 border border-line">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-text group-hover:text-accent transition-colors">{t('projects.live')}</span>
          <span className="grid place-items-center w-10 h-10 rounded-full border border-line text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [first, second, ...rest] = liveProjects;

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('projects.title')} aside={t('projects.count', { count: liveProjects.length })} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <ProjectCard index={0} project={first} large />
          <ProjectCard index={1} project={second} large />
        </div>

        <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((p, i) => (
            <ProjectCard key={p.key} index={i + 2} project={p} />
          ))}
        </div>

        <h3 className="mt-14 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-muted">{t('projects.alsoTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {teamProjects.map(({ key, title, kind, icon: Icon, tech }) => (
            <div key={key} className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-sm border border-dashed border-text/25">
              <span className="grid place-items-center shrink-0 w-12 h-12 rounded-sm bg-accent/10 text-accent">
                <Icon size={22} />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="font-extrabold uppercase tracking-wide text-text">{title}</h4>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">{kind}</span>
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{t(`projects.${key}`)}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-text/60">
                  <Lock size={12} aria-hidden="true" />
                  {t('projects.team')}
                  <span aria-hidden="true">·</span>
                  {tech.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
