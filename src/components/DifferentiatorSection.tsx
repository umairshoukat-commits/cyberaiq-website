"use client";

import { motion } from "framer-motion";

const checklist = [
  "Hyperscalers-Cloud-first by design",
  "Secure & responsible AI-first",
  "AI-native and automation-led",
  "Cloud and data at the core of every solution",
  "Compliance, governance, and ethics driven",
  "No hardware. No legacy models.",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function DifferentiatorSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
            What Makes Us Different
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8]">
            Built for the future, not the legacy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — visual / abstract representation */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="p-10 rounded-2xl relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: "420px",
              }}
            >
              {/* Abstract convergence visual */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-[15%] left-[10%] w-48 h-48 rounded-full blur-[60px]"
                  style={{ background: "#F47920", opacity: 0.08 }}
                />
                <div
                  className="absolute bottom-[15%] right-[10%] w-56 h-56 rounded-full blur-[70px]"
                  style={{ background: "#2B7EC1", opacity: 0.08 }}
                />
              </div>
              <div className="relative z-10">
                <p className="text-[#F0F4F8] text-xl font-semibold mb-6 leading-snug">
                  We don&apos;t operate security — we enable secure transformation.
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8" style={{ fontSize: "16px" }}>
                  By architecting resilience, trust, and long-term adaptability across AI, Cloud, Cyber, and Quantum.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["AI", "Cloud", "Cyber", "Quantum"].map((pillar, i) => (
                    <div
                      key={pillar}
                      className="p-4 rounded-xl text-center"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase"
                        style={{ color: i % 2 === 0 ? "#F47920" : "#2B7EC1" }}
                      >
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — checklist */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: i % 2 === 0 ? "rgba(244,121,32,0.1)" : "rgba(43,126,193,0.1)",
                    border: `1px solid ${i % 2 === 0 ? "rgba(244,121,32,0.25)" : "rgba(43,126,193,0.25)"}`,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l4 4 6-6"
                      stroke={i % 2 === 0 ? "#F47920" : "#2B7EC1"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#F0F4F8] font-medium" style={{ fontSize: "16px" }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
