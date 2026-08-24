import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolio";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-bold tracking-tight"
        >
          Gowreesh<span className="text-[#16A34A]">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === l.id ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-[#16A34A]/40"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-full bg-[#16A34A] px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 hover:emerald-glow md:block"
        >
          Let's Talk
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-strong overflow-hidden md:hidden"
        >
          <div className="flex flex-col px-6 py-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`py-3 text-left text-base ${
                  active === l.id ? "text-[#16A34A]" : "text-white/70"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
