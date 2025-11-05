import React, { useState } from 'react';

const ContactFooter = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — your message has been prepared in your email client.');
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[rgb(5,8,18)] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-white">Let’s build something refined</h3>
          <p className="mt-2 max-w-md text-white/70">
            Have a project in mind? Send a note and I’ll get back within 1–2 business days.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-white/60">
            <p>Based in: Remote / Worldwide</p>
            <p>Availability: Limited Q4 slots</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input
              id="name"
              name="name"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-300/40 focus:bg-white/10"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-300/40 focus:bg-white/10"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-300/40 focus:bg-white/10"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-2.5 font-medium text-slate-900 transition hover:bg-cyan-300"
            >
              Send Message
            </button>
            <p className="text-xs text-white/50">{status}</p>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Your Name — Minimalist & Clean portfolio
      </div>
    </footer>
  );
};

export default ContactFooter;
