import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 as Github, ExternalLink, Clock, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectPopup = ({ isOpen, onClose, title, message, githubUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-cards rounded-2xl p-5 sm:p-8 max-w-md w-full border border-white/10 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <X size={20} className="text-text/60" />
          </button>
        </div>
        <p className="text-text/80 mb-6 leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Github size={18} />
            View on GitHub
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/10 text-text/80 rounded-lg hover:bg-white/5 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, description, tech, github, demo, image, onShowPopup }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-cards rounded-2xl overflow-hidden border border-white/5 shadow-xl shadow-black/20 hover:border-accent/30 transition-all duration-500 flex flex-col"
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
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 sm:gap-6 backdrop-blur-sm">
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-cards/80 hover:bg-accent text-text hover:text-background rounded-full transition-all duration-300 transform hover:scale-110">
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
        {demo === "in-progress" ? (
          <button
            onClick={() => onShowPopup(title)}
            className="p-3 sm:p-4 bg-cards/80 text-accent rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <Clock size={20} className="sm:w-6 sm:h-6" />
          </button>
        ) : (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-cards/80 hover:bg-accent text-text hover:text-background rounded-full transition-all duration-300 transform hover:scale-110">
            <ExternalLink size={20} className="sm:w-6 sm:h-6" />
          </a>
        )}
      </div>
    </div>

    <div className="p-5 sm:p-8 flex flex-col flex-1">
      <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-text group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-text/70 text-sm sm:text-base mb-5 sm:mb-8 leading-relaxed line-clamp-3">
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
  const [popupData, setPopupData] = useState(null);

  const handleShowPopup = (title) => {
    if (title === "EduSta Big Data Projection") {
      setPopupData({
        title: "Project In Progress",
        message: "This project is currently under development. Check out the GitHub repository to see the latest progress and contribute to the project!",
        githubUrl: "https://github.com/mugishavalens/Edusta-Bigdata-Projection.git"
      });
    } else if (title === "Emergency Severity Prediction System") {
      setPopupData({
        title: "Project In Progress",
        message: "This machine learning project is currently being developed. Visit the GitHub repository to explore the codebase and follow the development progress!",
        githubUrl: "https://github.com/mugishavalens/emergency-severity-prediction-system.git"
      });
    } else if (title === "EduSta Big Data Projection") {
      setPopupData({
        title: "Project In Progress",
        message: "This big data project is currently under development. Check out the GitHub repository to see the latest progress and explore the codebase!",
        githubUrl: "https://github.com/mugishavalens/Edusta-Bigdata-Projection.git"
      });
    }
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  const projects = [
    {
      title: "Emergency Severity Prediction System",
      description: "A machine learning based system to analyze emergency-related data and estimate severity levels. Structured for data-driven decision making.",
      tech: ["Python", "Data Analysis", "Machine Learning"],
      github: "https://github.com/mugishavalens",
      demo: "in-progress",
      image: "https://images.unsplash.com/photo-1518186239767-28a0824cff8a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Job Application Management System",
      description: "Full-stack web application to manage and track job applications efficiently, with features for storing, retrieving and updating application data.",
      tech: ["PHP", "MySQL", "Web-Development"],
      github: "https://github.com/mugishavalens",
      demo: "https://poetic-cassata-a21d35.netlify.app/",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "EduSta Big Data Projection",
      description: "Analysis of large-scale educational datasets, performing data cleaning and preprocessing for accurate analysis and data-driven conclusions.",
      tech: ["Big Data", "Data Analysis", "Python"],
      github: "https://github.com/mugishavalens/Edusta-Bigdata-Projection.git",
      demo: "https://edusta-project.vercel.app/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "E-commerce Product Page",
      description: "Interactive product page with dynamic UI features such as product selection, interaction handling, and basic cart functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mugishavalens",
      demo: "https://ecommerce-page-viva.netlify.app/shop",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "CivicGuard – Kigali Smart City",
      description: "A smart city civic engagement platform for Kigali, enabling citizens to report urban issues, track resolutions, and interact with city services in real time.",
      tech: ["React", "Node.js", "Smart City"],
      github: "https://github.com/mugishavalens/civicguard-kigali-smart-city.git",
      demo: "https://kigali-civicguard.netlify.app/",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Simba Store",
      description: "A modern e-commerce storefront with product listings, cart management, and a smooth shopping experience built with a component-driven architecture.",
      tech: ["Vue.js", "JavaScript", "E-commerce"],
      github: "https://github.com/mugishavalens/simba-store.git",
      demo: "https://simba-store.netlify.app/",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Kimchi Korean Restaurant",
      description: "A vibrant restaurant website for a Korean dining experience, featuring a full menu showcase, elegant UI, and smooth navigation for an inviting online presence.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mugishavalens/Kimchi_Korean_Restaurant.git",
      demo: "https://incredible-tulumba-a4e81d.netlify.app/",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "The Bistro",
      description: "A full-stack restaurant web application with an elegant dining experience, featuring menu browsing, reservations, and a polished UI deployed on Google Cloud Run.",
      tech: ["Full-Stack", "Google Cloud", "Restaurant"],
      github: "https://github.com/mugishavalens/the_bestro.git",
      demo: "https://the-bistro-980958970412.europe-west2.run.app/",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('projects.title')} <span className="text-accent">{t('projects.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} onShowPopup={handleShowPopup} />
          ))}
        </div>
      </div>

      <ProjectPopup
        isOpen={!!popupData}
        onClose={handleClosePopup}
        title={popupData?.title}
        message={popupData?.message}
        githubUrl={popupData?.githubUrl}
      />
    </section>
  );
};

export default Projects;
