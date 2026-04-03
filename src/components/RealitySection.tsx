"use client";

import { motion } from "framer-motion";

const truths = [
  {
    title: "AI is scaling faster than security",
    description: "Enterprise AI adoption is outpacing the security frameworks designed to govern it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#F47920" strokeWidth="1.5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" stroke="#F47920" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Identity has replaced the perimeter",
    description: "The network edge is no longer the security boundary. Identity is the new control plane.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#2B7EC1" strokeWidth="1.5" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#2B7EC1",
  },
  {
    title: "Quantum will break today\u2019s cryptography",
    description: "Post-quantum threats are not theoretical. Organizations must prepare for crypto-agility now.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F47920" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F47920" strokeWidth="1" transform="rotate(60 12 12)" opacity="0.5" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F47920" strokeWidth="1" transform="rotate(-60 12 12)" opacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="#F47920" />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Legacy security models cannot keep up",
    description: "Traditional approaches were not built for cloud-native, AI-driven, data-centric architectures.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2B7EC1" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 12h8M8 16h5" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#2B7EC1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function RealitySection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-4">
            The Reality
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8]">
            Four truths shaping the future
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {truths.map((truth, i) => (
            <motion.div
              key={truth.title}
              custom={i}
              variants={cardVariants}
              className="p-7 rounded-2xl group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                boxShadow: `inset 0 2px 0 0 ${truth.accent}25`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${truth.accent}10`,
                  border: `1px solid ${truth.accent}25`,
                }}
              >
                {truth.icon}
              </div>
              <h3 className="text-[#F0F4F8] font-semibold text-base mb-3 leading-snug">
                {truth.title}
              </h3>
              <p className="text-[#8896AB] text-sm leading-relaxed">
                {truth.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
