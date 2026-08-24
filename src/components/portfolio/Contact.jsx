import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, NAV_LINKS } from "@/data/portfolio";
import { SectionHeading, Reveal } from "./common";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: Linkedin, label: "LinkedIn", value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: null },
];

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message ready", description: "Thanks — opening your email client to send." });
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Portfolio enquiry from " + form.name)}&body=${body}`;
    setTimeout(() => setSent(false), 2500);
  };

  const field = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#16A34A]/60 focus:ring-1 focus:ring-[#16A34A]/40";

  return (
    <section id="contact" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[72rem]">
        <SectionHeading eyebrow="Contact" title="Let's build something impactful" sub="Open to full-time roles, freelance builds, and collaboration. Reach out and I'll get back quickly." />
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {INFO.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:ring-1 hover:ring-[#16A34A]/40">
                  <span className="inline-flex rounded-xl bg-[#16A34A]/15 p-3 text-[#16A34A]"><Icon size={20} /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/40">{label}</div>
                    <div className="text-sm text-white/85">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">{inner}</a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl glass p-8">
            <form onSubmit={submit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70" htmlFor="c-name">Name</label>
                <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70" htmlFor="c-email">Email</label>
                <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70" htmlFor="c-msg">Message</label>
                <textarea id="c-msg" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field + " resize-none"} placeholder="Tell me about your project or role..." />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-medium text-white transition hover:emerald-glow hover:bg-emerald-500 active:scale-[0.98]">
                {sent ? <><CheckCircle2 size={16} /> Sent</> : <>Send Message <Send size={15} /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="font-display text-lg font-bold">Gowreesh<span className="text-[#16A34A]">.</span></div>
          <p className="mt-1 text-sm text-white/45">{CONTACT.title}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-white/55 transition hover:text-[#16A34A]">{l.label}</button>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full glass p-2.5 text-white/70 transition hover:text-[#16A34A]"><Linkedin size={18} /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="rounded-full glass p-2.5 text-white/70 transition hover:text-[#16A34A]"><Mail size={18} /></a>
          <a href={`tel:${CONTACT.phone}`} aria-label="Phone" className="rounded-full glass p-2.5 text-white/70 transition hover:text-[#16A34A]"><Phone size={18} /></a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Gowreesh S S · Namakkal, Tamil Nadu · Built with passion.
      </p>
    </footer>
  );
}
