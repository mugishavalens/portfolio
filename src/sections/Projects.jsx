import React from 'react';
import { motion } from 'framer-motion';
import { Code2 as Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, tech, github, demo, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-cards rounded-2xl overflow-hidden border border-white/5 shadow-xl shadow-black/20 hover:border-accent/30 transition-all duration-500"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/600x400?text=' + title.replace(/ /g, '+');
        }}
      />
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 bg-cards/80 hover:bg-accent text-text hover:text-background rounded-full transition-all duration-300 transform hover:scale-110">
          <Github size={24} />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="p-4 bg-cards/80 hover:bg-accent text-text hover:text-background rounded-full transition-all duration-300 transform hover:scale-110">
          <ExternalLink size={24} />
        </a>
      </div>
    </div>

    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-text/70 text-base mb-8 leading-relaxed line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-background border border-white/5 text-accent text-xs font-mono font-medium rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Emergency Severity Prediction System",
      description: "A machine learning based system to analyze emergency-related data and estimate severity levels. Structured for data-driven decision making.",
      tech: ["Python", "Data Analysis", "Machine Learning"],
      github: "https://github.com/mugishavalens",
      demo: "#",
      image: "https://images.unsplash.com/photo-1518186239767-28a0824cff8a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Job Application Management System",
      description: "Full-stack web application to manage and track job applications efficiently, with features for storing, retrieving and updating application data.",
      tech: ["PHP", "MySQL", "Web-Development"],
      github: "https://github.com/mugishavalens",
      demo: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "EduSta Big Data Projection",
      description: "Analysis of large-scale educational datasets, performing data cleaning and preprocessing for accurate analysis and data-driven conclusions.",
      tech: ["Big Data", "Data Analysis", "Python"],
      github: "https://github.com/mugishavalens",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "E-commerce Product Page",
      description: "Interactive product page with dynamic UI features such as product selection, interaction handling, and basic cart functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mugishavalens",
      demo: "#",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('projects.title')} <span className="text-accent">{t('projects.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
