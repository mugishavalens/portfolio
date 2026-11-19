// Netlify Function: POST /api/contact → sends the portfolio contact form to my inbox via Resend.
// Needs the RESEND_API_KEY environment variable (Netlify → Site configuration → Environment variables).

const TO = 'valensmugisha5@gmail.com';
// Without a verified domain, Resend only allows this sender, and only to the account's own email.
const FROM = 'Portfolio Contact <onboarding@resend.dev>';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  const body = await req.json().catch(() => null);
  if (!body) return json(400, { error: 'Invalid JSON' });

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (body._honey) return json(200, { ok: true }); // honeypot filled → silently drop bots
  if (!name || !message || !emailRegex.test(email)) return json(400, { error: 'Please fill in every field.' });
  if (name.length > 200 || email.length > 320 || message.length > 5000) return json(400, { error: 'Message is too long.' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return json(500, { error: 'Email is not configured.' });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `New portfolio message from ${name.replace(/[\r\n]+/g, ' ')}`,
      text: `${message}\n\n— ${name} <${email}>`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; wrote:</p>
<p style="white-space:pre-wrap;font-size:15px;line-height:1.5">${escapeHtml(message)}</p>
<hr><p style="color:#888;font-size:12px">Sent from your portfolio contact form. Reply to answer them directly.</p>`,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text().catch(() => ''));
    return json(502, { error: 'Email service failed.' });
  }
  return json(200, { ok: true });
};

export const config = { path: '/api/contact' };
