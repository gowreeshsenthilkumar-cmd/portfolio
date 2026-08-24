import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient"
            >
              GS
            </motion.div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-[#16A34A]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Loading Portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-[#16A34A] via-emerald-400 to-emerald-200"
    />
  );
}

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(22,163,74,0.10), transparent 70%)`,
      }}
    />
  );
}

export function BackgroundGradients() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[#16A34A]/10 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[36rem] w-[36rem] rounded-full bg-emerald-500/8 blur-[130px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(22,163,74,0.08),transparent_50%)]" />
    </div>
  );
}
