import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Code2 as Github, UserRound as Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EMAIL = 'valensmugisha5@gmail.com';
// Netlify Function (netlify/functions/contact.mjs) that sends the message via Resend.
const ENDPOINT = '/api/contact';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full px-4 py-3.5 bg-background border border-line rounded-sm text-text placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '', _honey: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
  )}`;

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setFeedback(t('contact.required'));
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback(t('contact.invalid'));
      return;
    }
    if (form._honey) return; // bot

    setStatus('sending');
    setFeedback('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _honey: form._honey }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setFeedback(t('contact.success'));
      setForm({ name: '', email: '', message: '', _honey: '' });
    } catch {
      setStatus('error');
      setFeedback(t('contact.failed'));
    }
  };

  const details = [
    { icon: Mail, label: t('contact.email'), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: t('contact.location'), value: 'Kigali, Rwanda' },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/mugishavalens' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/feed/' },
    { icon: Mail, label: t('contact.email'), href: `mailto:${EMAIL}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-accent hidden md:block" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 shadow-2xl shadow-navy/15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-navy text-white p-7 sm:p-10 lg:p-12 flex flex-col"
        >
          <h2 className="font-display uppercase leading-[0.95] text-[clamp(2.5rem,5vw,3.75rem)]">
            <span className="block">{t('contact.title1')}</span>
            <span className="block text-accent">{t('contact.title2')}</span>
          </h2>
          <div className="w-16 h-1 bg-accent my-6" aria-hidden="true"></div>
          <p className="text-white/75 leading-relaxed max-w-sm">{t('contact.intro')}</p>

          <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{t('contact.heading')}</h3>
          <ul className="mt-4 space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon size={18} className="text-accent shrink-0" aria-hidden="true" />
                <span className="sr-only">{label}: </span>
                {href ? (
                  <a href={href} className="font-semibold break-all hover:text-accent transition-colors">{value}</a>
                ) : (
                  <span className="font-semibold">{value}</span>
                )}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 lg:mt-auto lg:pt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{t('contact.connect')}</h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="grid place-items-center w-11 h-11 rounded-full bg-white text-navy hover:bg-accent hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-7 bg-surface p-7 sm:p-10 lg:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.18em] text-muted">{t('contact.name')}</label>
              <input id="name" type="text" autoComplete="name" value={form.name} onChange={update('name')} placeholder={t('contact.namePh')} className={inputClass} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.18em] text-muted">{t('contact.emailLabel')}</label>
              <input id="email" type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder={t('contact.emailPh')} className={inputClass} />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.18em] text-muted">{t('contact.message')}</label>
            <textarea id="message" rows="6" value={form.message} onChange={update('message')} placeholder={t('contact.messagePh')} className={`${inputClass} resize-none`}></textarea>
          </div>
          {/* honeypot */}
          <input type="text" name="_honey" value={form._honey} onChange={update('_honey')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div aria-live="polite">
            {feedback && (
              <div className={`flex items-start gap-2 text-sm font-medium ${status === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {status === 'success' ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
                <p>
                  {feedback}
                  {status === 'error' && feedback === t('contact.failed') && (
                    <> <a href={mailtoHref} className="underline font-bold">{t('contact.fallback')}</a>.</>
                  )}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 font-bold text-white hover:bg-accent-strong disabled:opacity-60 disabled:cursor-wait transition-colors"
          >
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
