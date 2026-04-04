"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const pillars = [
  {
    id: "cyber",
    title: "Cyber Transformation",
    description:
      "Reimagining security for a cloud-native, AI oriented, data-driven world.",
    href: "/services#cyber",
    accent: "#F47920",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 6v6c0 5.4 3.9 10.4 9 11.5 5.1-1.1 9-6.1 9-11.5V6L12 2z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI Enablement & Automation",
    description:
      "Embedding intelligence, automation, and decision velocity into security and business workflows — with integrity and accountability.",
    href: "/services#ai",
    accent: "#2B7EC1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="var(--color-secondary)" strokeWidth="1.5" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
          stroke="var(--color-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="var(--color-secondary)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Transformation",
    description:
      "Enabling hyperscaler-native adoption through strategy, readiness, and migration — creating the secure foundation for AI, resilience, and scale.",
    href: "/services#cloud",
    accent: "#F47920",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 16a4 4 0 10-.8-7.9A6 6 0 106 16h12z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "quantum",
    title: "Quantum Readiness & Cryptographic Transformation",
    description:
      "Preparing organizations for the cryptographic and trust shifts that quantum computing will bring — before disruption becomes risk.",
    href: "/services#quantum",
    accent: "#2B7EC1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="var(--color-secondary)" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          stroke="var(--color-secondary)"
          strokeWidth="1"
          transform="rotate(60 12 12)"
          opacity="0.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          stroke="var(--color-secondary)"
          strokeWidth="1"
          transform="rotate(-60 12 12)"
          opacity="0.5"
        />
        <circle cx="12" cy="12" r="2" fill="var(--color-secondary)" />
      </svg>
    ),
  },
];

export default function PillarsSection() {
  return (
    <section className="relative" style={{ padding: "160px 0" }} id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
            Our Services
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
            Our Four Pillars
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.id} variants={staggerItem}>
              <Link href={pillar.href} className="block h-full group">
                <div
                  className="h-full p-8 rounded-2xl bg-[#0A0D12] border border-[var(--color-border)] relative overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
                  style={{
                    boxShadow: `inset 0 2px 0 0 ${pillar.accent}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${pillar.accent}26`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `${pillar.accent}10`,
                      border: `1px solid ${pillar.accent}20`,
                    }}
                  >
                    {pillar.icon}
                  </div>

                  <h3 className="text-[#F0F4F8] text-lg font-semibold mb-3 tracking-tight group-hover:text-white transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[#8896AB] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: pillar.accent }}
                  >
                    <span>Learn more</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
