"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const truths = [
  { number: "01", title: "AI is scaling faster than security", accent: "#F47920" },
  { number: "02", title: "Identity has replaced the perimeter", accent: "#2B7EC1" },
  { number: "03", title: "Quantum will break today\u2019s cryptography", accent: "#F47920" },
  { number: "04", title: "Legacy Security Models cannot keep up", accent: "#2B7EC1" },
];

export default function RealitySection() {
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
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
            The Reality
          </p>
          <h2
            className="text-[#F0F4F8]"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textWrap: "balance",
            }}
          >
            Four Truths Shaping The Future
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {truths.map((truth) => (
            <motion.div
              key={truth.number}
              variants={staggerItem}
              className="relative p-8 rounded-2xl bg-[#0A0D12] border border-[var(--color-border)] overflow-hidden group transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                boxShadow: `inset 0 2px 0 0 ${truth.accent}30`,
              }}
            >
              {/* Large faded number */}
              <span
                className="absolute top-4 right-5 text-[72px] font-black leading-none pointer-events-none select-none"
                style={{ color: truth.accent, opacity: 0.06 }}
              >
                {truth.number}
              </span>

              <div className="relative z-10">
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-5 block"
                  style={{ color: truth.accent, opacity: 0.7 }}
                >
                  {truth.number}
                </span>
                <h3
                  className="text-[#F0F4F8] font-semibold text-base leading-snug"
                  style={{ textWrap: "balance" }}
                >
                  {truth.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
