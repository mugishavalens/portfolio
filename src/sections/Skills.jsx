import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Shield, Terminal, Database as Databases, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-cards p-8 rounded-2xl border border-white/5 shadow-xl shadow-black/20 hover:border-accent/30 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-accent/10 rounded-xl">
        <Icon className="text-accent" size={28} />
      </div>
      <h3 className="text-xl font-bold text-text">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-1.5 bg-background border border-white/5 rounded-lg text-sm font-mono text-text/80 hover:text-accent hover:border-accent/50 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "PHP", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "PHP", "MySQL", "React", "Tailwind CSS"]
    },
    {
      title: "Networking & Security",
      icon: Shield,
      skills: ["LSM", "DHCP", "RIPv2", "SSH", "Cisco Packet Tracer", "Vulnerability Assessment", "Penetration Testing"]
    },
    {
      title: "Problem Solving",
      icon: Terminal,
      skills: ["LeetCode", "HackerRank", "Codewars", "Codeforces", "Data Structures", "Algorithms"]
    },
    {
      title: "Data & Systems",
      icon: Databases,
      skills: ["MySQL", "PostgreSQL", "Big Data Concepts", "Data Cleaning", "Data Analysis"]
    },
    {
      title: "Tools",
      icon: Cpu,
      skills: ["IntelliJ IDEA", "VS Code", "PyCharm", "GitHub", "NetBeans", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('skills.title')} <span className="text-accent">{t('skills.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
