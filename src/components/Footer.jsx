import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Valens Mugisha. {t('footer.rights')}</p>
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-text hover:text-accent transition-colors">
          {t('footer.top')} <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
