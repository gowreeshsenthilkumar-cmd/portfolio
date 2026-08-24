import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ExternalLink, X, Code2, Globe, Wrench, Sparkles,
  GraduationCap, Briefcase, Users, GitBranch, BookOpen, Rocket,
  CheckCircle2, Cpu,
} from "lucide-react";
import {
  STATS, SKILLS, PROJECTS, INTERNSHIPS, EDUCATION, LEADERSHIP,
} from "@/data/portfolio";
import { SectionHeading, Reveal, Counter, TiltCard } from "./common";

const ICONS = { Users, GitBranch, BookOpen, Rocket };
const SKILL_ICONS = [Code2, Globe, Wrench, Sparkles];

/* ---------------- About + Stats ---------------- */
export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[72rem]">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into shipped products"
          sub="An Information Technology graduate with an AI honours specialization who has already deployed three live business platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl glass p-8">
            <p className="text-white/70 leading-relaxed">
              I'm a B.Tech Information Technology student (Honours in AI) at Mahendra
              Engineering College, Namakkal — but my strongest learning has come from
              building and running real websites. From an agricultural e-commerce
              marketplace to solar-energy and premium wellness brands, I've handled the
              full lifecycle: design, development, deployment, catalogues, orders, and
              customer workflows.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Alongside development, I've led teams as Class Representative and project
              lead, co-authored an IEEE research paper, and completed internships across
              machine learning, full-stack engineering, and design — driven by a passion
              for solving real-world business problems with technology.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="rounded-2xl glass p-6 text-center">
                <div className="font-display text-4xl font-bold text-[#16A34A]">
                  <Counter to={s.value} />+
                </div>
                <div className="mt-2 text-xs leading-tight text-white/55">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading eyebrow="Skills" title="A versatile technical toolkit" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, gi) => {
            const Icon = SKILL_ICONS[gi % SKILL_ICONS.length];
            return (
              <Reveal key={group.category} delay={gi * 0.08}>
                <TiltCard className="group h-full rounded-3xl glass p-7 hover:ring-1 hover:ring-[#16A34A]/40">
                  <div className="mb-5 inline-flex rounded-xl bg-[#16A34A]/15 p-3 text-[#16A34A]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((it) => (
                      <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition group-hover:border-[#16A34A]/30">
                        {it}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
export function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Live platforms, real business impact"
          sub="Three production websites built and deployed end-to-end — not classroom demos."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-3xl glass hover:ring-1 hover:ring-[#16A34A]/40">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[11px] text-[#16A34A]">{p.role}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">{p.name}</h3>
                    <span className="text-xs text-white/40">{p.domain}</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#16A34A]">{p.type}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/60">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A] px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-500">
                      Live Website <ExternalLink size={13} />
                    </a>
                    <button onClick={() => setActive(p)} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-[#16A34A]/50">
                      View Details <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-strong"
            >
              <img src={active.image} alt={active.name} className="h-52 w-full object-cover" />
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-[#16A34A]"><X size={18} /></button>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold">{active.name}</h3>
                <p className="mt-1 text-sm text-[#16A34A]">{active.type} · {active.role}</p>
                <p className="mt-4 text-white/70">{active.description}</p>
                <h4 className="mt-6 font-display text-sm uppercase tracking-wider text-white/50">Key Features</h4>
                <ul className="mt-3 space-y-2">
                  {active.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />{f}</li>
                  ))}
                </ul>
                <h4 className="mt-6 font-display text-sm uppercase tracking-wider text-white/50">Technologies</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-full bg-[#16A34A]/15 px-3 py-1 text-xs text-[#16A34A]">{t}</span>
                  ))}
                </div>
                <a href={active.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-500">
                  Visit {active.domain} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Experience (Internships + Education) ---------------- */
function TimelineItem({ icon: Icon, title, meta, sub, points, tech, last }) {
  return (
    <div className="relative pl-12">
      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#16A34A]/15 text-[#16A34A] ring-1 ring-[#16A34A]/40">
        <Icon size={16} />
      </span>
      {!last && <span className="absolute left-[17px] top-9 h-full w-px bg-gradient-to-b from-[#16A34A]/50 to-transparent" />}
      <Reveal className="pb-10">
        <div className="rounded-2xl glass p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <span className="text-xs text-[#16A34A]">{meta}</span>
          </div>
          {sub && <p className="mt-1 text-sm text-white/60">{sub}</p>}
          {points && (
            <ul className="mt-3 space-y-1.5">
              {points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-white/60"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#16A34A]" />{p}</li>
              ))}
            </ul>
          )}
          {tech && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/60">{t}</span>)}
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[80rem] gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-10 flex items-center gap-3">
            <Briefcase className="text-[#16A34A]" size={22} />
            <h2 className="font-display text-2xl font-bold md:text-3xl">Internships</h2>
          </div>
          {INTERNSHIPS.map((it, i) => (
            <TimelineItem key={it.company} icon={Cpu} title={it.company} meta={it.period} sub={it.role} points={it.points} tech={it.tech} last={i === INTERNSHIPS.length - 1} />
          ))}
        </div>
        <div>
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap className="text-[#16A34A]" size={22} />
            <h2 className="font-display text-2xl font-bold md:text-3xl">Education</h2>
          </div>
          {EDUCATION.map((e, i) => (
            <TimelineItem key={e.degree} icon={GraduationCap} title={e.degree} meta={e.period} sub={`${e.school}${e.note ? " · " + e.note : ""}`} last={i === EDUCATION.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Leadership ---------------- */
export function Leadership() {
  return (
    <section id="leadership" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading eyebrow="Leadership & Achievements" title="Leading beyond the code" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((l, i) => {
            const Icon = ICONS[l.icon] || Rocket;
            return (
              <Reveal key={l.title} delay={i * 0.08}>
                <TiltCard className="h-full rounded-3xl glass p-7 hover:ring-1 hover:ring-[#16A34A]/40">
                  <div className="mb-5 inline-flex rounded-xl bg-[#16A34A]/15 p-3 text-[#16A34A]"><Icon size={22} /></div>
                  <h3 className="font-display text-base font-semibold">{l.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#16A34A]">{l.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{l.desc}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
