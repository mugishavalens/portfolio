import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2 as Github, UserRound as Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setFeedback('Sending message...');

    setTimeout(() => {
      setStatus('success');
      setFeedback('Message sent successfully! I will get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleChange = (field) => (e) => {
    setFormState((prev) => ({ ...prev, [field]: e.target.value }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-text">{t('contact.title')} <span className="text-accent">{t('contact.subtitle')}</span></h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold text-text">{t('contact.talk')}</h3>
            <p className="text-text/70 text-lg leading-relaxed max-w-lg">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: t('contact.email'), value: "valensmugisha5@gmail.com", href: "mailto:valensmugisha5@gmail.com" },
                { icon: Github, label: t('contact.github'), value: "github.com/mugishavalens", href: "https://github.com/mugishavalens" },
                { icon: Linkedin, label: t('contact.linkedin'), value: "Valens Mugisha", href: "https://www.linkedin.com/feed/" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="p-4 bg-cards border border-white/5 rounded-2xl group-hover:border-accent/50 transition-all duration-300 shadow-lg shadow-black/10">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-text/50 uppercase tracking-wider">{item.label}</h4>
                    <a href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined} className="text-text font-semibold hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cards p-10 rounded-[2rem] border border-white/5 shadow-2xl shadow-black/20 space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-text/50 uppercase tracking-widest ml-1">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange('name')}
                  className="w-full px-6 py-4 bg-background border border-white/5 rounded-xl focus:outline-none focus:border-accent/50 text-text transition-all placeholder:text-text/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-text/50 uppercase tracking-widest ml-1">{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange('email')}
                  className="w-full px-6 py-4 bg-background border border-white/5 rounded-xl focus:outline-none focus:border-accent/50 text-text transition-all placeholder:text-text/20"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-text/50 uppercase tracking-widest ml-1">{t('contact.message')}</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange('message')}
                  className="w-full px-6 py-4 bg-background border border-white/5 rounded-xl focus:outline-none focus:border-accent/50 text-text transition-all resize-none placeholder:text-text/20"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
            </div>
            {feedback && (
              <p className={`text-sm ${status === 'success' ? 'text-emerald-500' : status === 'error' ? 'text-rose-500' : 'text-text/70'}`}>
                {feedback}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-5 bg-accent hover:bg-accent/90 text-background rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center gap-3 group"
            >
              {status === 'sending' ? 'Sending...' : t('contact.send')}
              <Send size={22} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
