import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { CONTACT } from "@/data/portfolio";

const ROLES = [
  "AI & Full-Stack Developer",
  "E-Commerce Platform Builder",
  "Business Solutions Engineer",
];

function useTyping(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!del && text === word) {
      t = setTimeout(() => setDel(true), 1600);
    } else if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(() => {
        setText(word.substring(0, del ? text.length - 1 : text.length + 1));
      }, del ? 45 : 85);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.7 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#16A34A]" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Digital <br className="hidden sm:block" />
            Experiences That Create{" "}
            <span className="text-gradient">Real Business Impact.</span>
            <span className="text-gradiant">Co-Founder OF Startup</span>
             <span className="text-gradiant">Zingbee Technologies</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 font-display text-lg text-[#16A34A] md:text-xl"
          >
            {CONTACT.name} — <span className="text-white/90">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[#16A34A] align-middle" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/60"
          >
            Motivated IT graduate with hands-on experience building and deploying
            live business platforms — grounded in AI, full-stack development, and
            business process management, shipping real-world solutions rather than
            academic prototypes.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-medium text-white transition hover:emerald-glow hover:bg-emerald-500 active:scale-[0.98]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-[#16A34A]/60 hover:text-white active:scale-[0.98]"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50"
          >
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[#16A34A]" />{CONTACT.location}</span>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={15} className="text-[#16A34A]" />{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 hover:text-white"><Phone size={15} className="text-[#16A34A]" />{CONTACT.phone}</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={15} className="text-[#16A34A]" />{CONTACT.linkedinLabel}</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Animated emerald glow background */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-full bg-[#16A34A]/30 blur-3xl"
          />
          
          {/* Circular frame with premium glass effect */}
          <div className="relative aspect-square overflow-hidden rounded-full glass p-1 shadow-2xl emerald-glow">
            <img
              src={CONTACT.portrait}
              alt="Gowreesh S S professional headshot"
              loading="eager"
              className="h-full w-full rounded-full object-cover"
            />
            
            {/* Subtle inner border accent */}
            <div className="absolute inset-0 rounded-full border border-[#16A34A]/30 pointer-events-none" />
          </div>
          
          {/* Floating CGPA badge with enhanced animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 rounded-2xl glass-strong px-5 py-3 shadow-lg border border-[#16A34A]/20"
          >
            <div className="font-display text-2xl font-bold text-[#16A34A]">8.53</div>
            <div className="text-[11px] uppercase tracking-wider text-white/50">CGPA · B.Tech IT</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
