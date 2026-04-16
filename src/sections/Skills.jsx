import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Shield, Terminal, Database as Databases, Cpu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillPopup = ({ isOpen, onClose, skill, description, usage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-cards rounded-2xl p-8 max-w-lg w-full border border-white/10 shadow-2xl max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-text">{skill}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <X size={20} className="text-text/60" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-accent mb-3">What is {skill}?</h4>
            <p className="text-text/80 leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-accent mb-3">How I use it:</h4>
            <p className="text-text/80 leading-relaxed">{usage}</p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const SkillCategory = ({ title, icon: Icon, skills, onShowPopup }) => (
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
        <button
          key={skill}
          onClick={() => onShowPopup(skill)}
          className="px-4 py-1.5 bg-background border border-white/5 rounded-lg text-sm font-mono text-text/80 hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
        >
          {skill}
        </button>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { t } = useTranslation();
  const [popupData, setPopupData] = useState(null);

  const skillDescriptions = {
    "Python": {
      description: "Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability with its clean syntax and extensive standard library.",
      usage: "I use Python for data analysis, machine learning projects, automation scripts, and backend development. It's my primary language for AI/ML applications and data processing tasks."
    },
    "Java": {
      description: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It's platform-independent and widely used in enterprise applications.",
      usage: "I use Java for building robust, scalable applications, particularly in Android development and enterprise-level systems that require strong type safety and performance."
    },
    "PHP": {
      description: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.",
      usage: "I use PHP for server-side web development, creating dynamic websites, and building full-stack web applications with MySQL databases."
    },
    "JavaScript": {
      description: "JavaScript is a programming language that conforms to the ECMAScript specification. It's high-level, often just-in-time compiled, and multi-paradigm.",
      usage: "I use JavaScript for frontend development, creating interactive user interfaces, and building dynamic web applications with frameworks like React."
    },
    "SQL": {
      description: "SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system.",
      usage: "I use SQL for database design, querying data, and managing relational databases. It's essential for data-driven applications and backend development."
    },
    "HTML": {
      description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
      usage: "I use HTML as the foundation for all web development projects, creating semantic and accessible web page structures."
    },
    "CSS": {
      description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
      usage: "I use CSS for styling web pages, creating responsive layouts, and implementing modern design systems with frameworks like Tailwind CSS."
    },
    "React": {
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      usage: "I use React to build interactive user interfaces, create reusable components, and develop single-page applications with modern JavaScript features."
    },
    "Tailwind CSS": {
      description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
      usage: "I use Tailwind CSS for rapid UI development, creating consistent designs, and implementing responsive layouts without writing custom CSS."
    },
    "MySQL": {
      description: "MySQL is an open-source relational database management system based on SQL.",
      usage: "I use MySQL for storing and managing application data, designing database schemas, and performing complex queries in web applications."
    },
    "LSM": {
      description: "LSM (Linux Security Modules) is a framework for implementing security policies in the Linux kernel.",
      usage: "I use LSM concepts for understanding and implementing security policies in Linux systems and network security configurations."
    },
    "DHCP": {
      description: "DHCP (Dynamic Host Configuration Protocol) is a network management protocol used to automate the process of configuring devices on IP networks.",
      usage: "I use DHCP for network configuration, managing IP address assignments, and setting up automated network infrastructure."
    },
    "RIPv2": {
      description: "RIPv2 (Routing Information Protocol version 2) is a distance-vector routing protocol used in computer networks.",
      usage: "I use RIPv2 for understanding routing protocols, network design, and implementing dynamic routing in network simulations."
    },
    "SSH": {
      description: "SSH (Secure Shell) is a cryptographic network protocol for operating network services securely over an unsecured network.",
      usage: "I use SSH for secure remote access, secure file transfers, and managing Linux servers and network devices."
    },
    "Cisco Packet Tracer": {
      description: "Cisco Packet Tracer is a cross-platform visual simulation tool designed by Cisco Systems.",
      usage: "I use Packet Tracer for network simulation, designing network topologies, and practicing network configuration in a virtual environment."
    },
    "Vulnerability Assessment": {
      description: "Vulnerability assessment is the process of identifying, quantifying, and prioritizing vulnerabilities in a system.",
      usage: "I use vulnerability assessment techniques to identify security weaknesses, perform security audits, and recommend remediation strategies."
    },
    "Penetration Testing": {
      description: "Penetration testing is an authorized simulated attack on a computer system to evaluate the security of the system.",
      usage: "I use penetration testing methodologies to identify security vulnerabilities, test system defenses, and improve overall security posture."
    },
    "LeetCode": {
      description: "LeetCode is an online platform for coding interview preparation with thousands of programming problems.",
      usage: "I use LeetCode to practice algorithmic problem-solving, improve coding skills, and prepare for technical interviews."
    },
    "HackerRank": {
      description: "HackerRank is a technology hiring platform that assesses developer skills through coding challenges.",
      usage: "I use HackerRank for skill assessment, practicing coding problems, and demonstrating programming proficiency across different domains."
    },
    "Codewars": {
      description: "Codewars is a coding practice platform where users solve programming challenges called 'katas'.",
      usage: "I use Codewars to improve coding skills, learn new programming concepts, and engage with a community of developers."
    },
    "Codeforces": {
      description: "Codeforces is a competitive programming platform that hosts contests and provides programming problems.",
      usage: "I use Codeforces for competitive programming practice, algorithmic problem-solving, and participating in coding contests."
    },
    "Data Structures": {
      description: "Data structures are ways of organizing and storing data so that they can be accessed and modified efficiently.",
      usage: "I use data structures knowledge to design efficient algorithms, optimize code performance, and solve complex programming problems."
    },
    "Algorithms": {
      description: "Algorithms are step-by-step procedures for calculations, data processing, and automated reasoning.",
      usage: "I use algorithmic thinking to solve problems efficiently, optimize code performance, and develop scalable software solutions."
    },
    "PostgreSQL": {
      description: "PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development.",
      usage: "I use PostgreSQL for complex database applications, advanced querying, and projects requiring robust data integrity and performance."
    },
    "Big Data Concepts": {
      description: "Big data refers to data sets that are too large or complex to be dealt with by traditional data-processing application software.",
      usage: "I use big data concepts for handling large-scale data processing, distributed computing, and designing systems for massive data analysis."
    },
    "Data Cleaning": {
      description: "Data cleaning is the process of detecting and correcting corrupt or inaccurate records from a dataset.",
      usage: "I use data cleaning techniques to prepare datasets for analysis, ensure data quality, and improve the accuracy of data-driven insights."
    },
    "Data Analysis": {
      description: "Data analysis is the process of inspecting, cleansing, transforming, and modeling data to discover useful information.",
      usage: "I use data analysis techniques to extract insights from data, make informed decisions, and drive business intelligence."
    },
    "IntelliJ IDEA": {
      description: "IntelliJ IDEA is an integrated development environment written in Java for developing computer software.",
      usage: "I use IntelliJ IDEA for Java development, with its advanced code analysis, refactoring tools, and productivity features."
    },
    "VS Code": {
      description: "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS.",
      usage: "I use VS Code as my primary code editor for web development, with extensive extensions and customization options."
    },
    "PyCharm": {
      description: "PyCharm is a dedicated Python integrated development environment with advanced features for Python development.",
      usage: "I use PyCharm for Python development, taking advantage of its intelligent code assistance and debugging capabilities."
    },
    "GitHub": {
      description: "GitHub is a developer platform that allows developers to create, store, manage and share their code.",
      usage: "I use GitHub for version control, collaboration, project hosting, and showcasing my coding projects to potential employers."
    },
    "NetBeans": {
      description: "NetBeans is an integrated development environment for Java, PHP, and other programming languages.",
      usage: "I use NetBeans for Java and PHP development, particularly for enterprise applications and web projects."
    },
    "Linux": {
      description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
      usage: "I use Linux for development environments, server management, and understanding system-level programming concepts."
    }
  };

  const handleShowPopup = (skill) => {
    setPopupData({
      skill,
      description: skillDescriptions[skill]?.description || "Description not available.",
      usage: skillDescriptions[skill]?.usage || "Usage information not available."
    });
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

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
            <SkillCategory key={category.title} {...category} onShowPopup={handleShowPopup} />
          ))}
        </div>
      </div>

      <SkillPopup
        isOpen={!!popupData}
        onClose={handleClosePopup}
        skill={popupData?.skill}
        description={popupData?.description}
        usage={popupData?.usage}
      />
    </section>
  );
};

export default Skills;
