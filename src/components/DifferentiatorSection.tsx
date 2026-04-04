"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const checklist = [
  "Hyperscalers-Cloud-first by design",
  "Secure & responsible AI-first",
  "AI-native and automation-led",
  "Cloud and data at the core of every solution",
  "Compliance, governance, and ethics driven",
  "No hardware. No legacy models.",
];

export default function DifferentiatorSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "160px 0", background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
            What Makes Us Different
          </p>
          <h2
            className="text-text-0"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textWrap: "balance",
            }}
          >
            Built for the Future, Not the Legacy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left -- statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="p-10 rounded-2xl bg-surface-1 border border-[var(--color-border)] relative overflow-hidden"
              style={{ minHeight: "380px" }}
            >
              {/* Subtle glows */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-[15%] left-[10%] w-48 h-48 rounded-full blur-[60px]"
                  style={{ background: "var(--color-accent)", opacity: 0.06 }}
                />
                <div
                  className="absolute bottom-[15%] right-[10%] w-56 h-56 rounded-full blur-[70px]"
                  style={{ background: "var(--color-secondary)", opacity: 0.06 }}
                />
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full" style={{ minHeight: "300px" }}>
                <p className="text-text-0 text-xl font-semibold mb-6 leading-snug">
                  We don&apos;t operate security — we enable secure transformation.
                </p>
                <p className="text-text-2 leading-[1.7] mb-8" style={{ fontSize: "16px" }}>
                  By architecting resilience, trust, and long-term adaptability across AI, Cloud, Cyber, and Quantum.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["AI", "Cloud", "Cyber", "Quantum"].map((pillar, i) => (
                    <div
                      key={pillar}
                      className="p-4 rounded-xl bg-surface-2 border border-[var(--color-border)] text-center"
                    >
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase"
                        style={{ color: i % 2 === 0 ? "var(--color-accent)" : "var(--color-secondary)" }}
                      >
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right -- checklist */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface-1 border border-[var(--color-border)] transition-all duration-300"
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
                      stroke={i % 2 === 0 ? "var(--color-accent)" : "var(--color-secondary)"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-text-0 font-medium" style={{ fontSize: "16px" }}>
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
