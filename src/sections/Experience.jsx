import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Play, ExternalLink, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoPopup = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  const videoId = videoUrl.split('v=')[1]?.split('&')[0];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-cards rounded-2xl p-4 max-w-md w-full border border-white/10 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <X size={16} className="text-text/60" />
          </button>
        </div>

        <div className="aspect-video w-full mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-accent text-background text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceItem = ({ title, organization, period, summary, description, isEducation, videoUrl, websiteUrl, onShowVideo }) => (
  <motion.div
    initial={{ opacity: 0, x: isEducation ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-16 border-l-2 border-white/5 last:pb-0 group"
  >
    <div className="absolute left-[-17px] top-0 p-3 bg-cards border border-white/10 rounded-xl text-accent shadow-xl shadow-black/20 group-hover:border-accent/50 transition-colors">
      {isEducation ? <GraduationCap size={20} /> : <Briefcase size={20} />}
    </div>

    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors">{title}</h3>
      <div className="flex items-center gap-2">
        {videoUrl && (
          <button
            onClick={() => onShowVideo(videoUrl, title)}
            className="p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
            title="Watch video"
          >
            <Play size={16} />
          </button>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
            title="Visit website"
          >
            <ExternalLink size={16} />
          </a>
        )}
        <span className="px-4 py-1.5 bg-background text-xs font-mono font-bold text-accent rounded-full border border-accent/20 tracking-wider">
          {period}
        </span>
      </div>
    </div>

    <h4 className="text-accent/90 font-bold text-lg mb-2 flex items-center gap-2">
      <span className="w-4 h-[2px] bg-accent/40"></span>
      {organization}
    </h4>

    <p className="text-text/60 text-sm italic mb-4 max-w-2xl">{summary}</p>

    <p className="text-text/70 text-base leading-relaxed max-w-2xl bg-cards/50 p-6 rounded-2xl border border-white/5 shadow-lg shadow-black/10">
      {description}
    </p>
  </motion.div>
);

const Experience = () => {
  const { t } = useTranslation();
  const [videoPopup, setVideoPopup] = useState(null);

  const handleShowVideo = (videoUrl, title) => {
    setVideoPopup({ videoUrl, title });
  };

  const handleCloseVideo = () => {
    setVideoPopup(null);
  };

  const experiences = [
    {
      title: t('exp.items.i1.org'),
      organization: t('exp.items.i1.role'),
      period: "2026 - PRESENT",
      summary: "Building scalable backend services and helping launch data-driven digital transformation initiatives.",
      description: t('exp.items.i1.desc'),
      isEducation: false,
      videoUrl: "https://www.youtube.com/watch?v=bbcpV5uklM0",
      websiteUrl: "https://auca.ac.rw/"
    },
    {
      title: t('exp.items.i2.org'),
      organization: t('exp.items.i2.role'),
      period: "2025 - PRESENT",
      summary: "Competing in algorithmic challenges and sharpening problem-solving skills through focused training.",
      description: t('exp.items.i2.desc'),
      isEducation: false,
      videoUrl: null,
      websiteUrl: "https://a2sv.org/"
    },
    {
      title: t('exp.items.i3.org'),
      organization: t('exp.items.i3.role'),
      period: "2025",
      summary: "Supporting system architecture learning with hands-on IT training and practical development experience.",
      description: t('exp.items.i3.desc'),
      isEducation: false,
      videoUrl: null,
      websiteUrl: "https://thegym.rw/"
    },
    {
      title: t('exp.items.i4.role'),
      organization: t('exp.items.i4.org'),
      period: "2024 - PRESENT",
      summary: "Pursuing a Software Engineering degree with a strong focus on distributed systems and data processing.",
      description: t('exp.items.i4.desc'),
      isEducation: true,
      videoUrl: null,
      websiteUrl: "https://auca.ac.rw/"
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
            <ExperienceItem key={index} {...exp} onShowVideo={handleShowVideo} />
          ))}
        </div>
      </div>

      <VideoPopup
        isOpen={!!videoPopup}
        onClose={handleCloseVideo}
        videoUrl={videoPopup?.videoUrl}
        title={videoPopup?.title}
      />
    </section>
  );
};

export default Experience;
