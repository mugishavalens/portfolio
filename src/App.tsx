import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { translations, projects, skillsList } from './translations'

function useTypewriter(words: string[], speed = 150) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  return words[index].substring(0, subIndex);
}

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = useMemo(() => translations[lang], [lang]);
  
  const typewriterText = useTypewriter(
    lang === 'en' 
      ? ["Creative Developer", "Problem Solver", "UI Enthusiast"] 
      : ["مطور مبدع", "محلل مشكلات", "محب للواجهات"]
  );

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleProjectClick = (e: React.MouseEvent, project: typeof projects[0]) => {
    if (project.status === 'in-progress') {
      e.preventDefault();
      alert(`${t.inProgress}\n\n${t.visitGithub}${project.url}`);
    }
  };

  const openProject = (project: typeof projects[0]) => {
    if (project.status === 'in-progress') {
      alert(`${t.inProgress}\n\n${t.visitGithub}${project.url}`);
      return;
    }

    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="animated-bg"></div>
      
      <button className="language-switcher" onClick={toggleLanguage}>
        {t.switchLanguage}
      </button>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{t.heroTitle}</h1>
          <div className="hero-typewriter">
            <span>{typewriterText}</span>
            <span className="cursor">|</span>
          </div>
          <p style={{ marginTop: '20px' }}>{t.heroSub}</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="skills">
        <h2>{t.skills}</h2>
        <div className="skills-grid">
          {skillsList.map((skill) => (
            <a
              key={skill.name}
              href={skill.description}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-tag"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="projects">
        <h2>{t.projects}</h2>
        <p>{t.projectsDescription}</p>
        <div className="projects-grid">
          {projects.map((project) => {
            const hasDistinctGithubLink = project.githubUrl && project.githubUrl !== project.url;

            return (
            <div
              key={project.id}
              className="project-card"
              role="link"
              tabIndex={0}
              onClick={() => openProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project);
                }
              }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  {hasDistinctGithubLink && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-icon" onClick={(e) => {
                      e.stopPropagation();
                      project.status === 'in-progress' && handleProjectClick(e, project);
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </a>
                  )}
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="overlay-icon" onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(e, project);
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title[lang]}</h3>
                <p>{project.description[lang]}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          )})}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{t.documentation}</h2>
          <p>{t.docsDescription}</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                {t.exploreVite}
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                {t.learnMore}
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>{t.connectWithUs}</h2>
          <p>{t.joinCommunity}</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
