"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "cyber",
    title: "Cyber Transformation",
    description:
      "We help organizations redesign security architectures for a cloud-first, identity-driven, data-centric world.",
    tagline: "Converging architectural trust for the era of intelligence",
    focusAreas: [
      "Hyperscaler security architecture & design",
      "Cloud-native security foundations",
      "Identity, data, and zero-trust transformation",
      "Governance, risk, and compliance by design",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6v6c0 5.4 3.9 10.4 9 11.5 5.1-1.1 9-6.1 9-11.5V6L12 2z" stroke="#F47920" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#F47920",
    href: "/services#cyber",
  },
  {
    id: "ai",
    title: "AI Enablement & Automation",
    description:
      "We enable Secure & Responsible AI as a first-class capability — not an add-on.",
    tagline: "AI is not a tool. It is the operating model — secure, ethical, and accountable by design",
    focusAreas: [
      "AI Agents on SaaS Platform for advanced analytics",
      "AI-driven Cybersecurity for proactive threat detection",
      "LLM Integration with privacy and compliance by design",
      "Security workflow automation & Data readiness for AI",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#2B7EC1" strokeWidth="1.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" stroke="#2B7EC1" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
    accent: "#2B7EC1",
    href: "/services#ai",
  },
  {
    id: "cloud",
    title: "Cloud Transformation",
    description:
      "We help organizations adopt and evolve cloud as a strategic platform — not a lift-and-shift exercise.",
    tagline: "Cloud is the foundation. Strategy defines the path. Execution creates scale.",
    focusAreas: [
      "Cloud Migration optimized for security, compliance & AI",
      "Cloud strategy and target operating models",
      "Cloud readiness and migration assessments",
      "Landing zone, architecture design & workload migration",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 16a4 4 0 10-.8-7.9A6 6 0 106 16" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19l3-3 3 3" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16v6" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#F47920",
    href: "/services#cloud",
  },
  {
    id: "quantum",
    title: "Quantum Readiness",
    description:
      "Quantum is not theoretical. It is a timeline risk.",
    tagline: "Prepare now. Transition safely.",
    focusAreas: [
      "Quantum risk assessments",
      "Post-quantum cryptography readiness",
      "Crypto-agility strategy",
      "Post-Quantum Readiness strategies for critical infrastructure",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2B7EC1" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#2B7EC1" strokeWidth="1" transform="rotate(60 12 12)" opacity="0.5" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#2B7EC1" strokeWidth="1" transform="rotate(-60 12 12)" opacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="#2B7EC1" />
      </svg>
    ),
    accent: "#2B7EC1",
    href: "/services#quantum",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative" style={{ padding: "160px 0" }} id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-4">
            Our Services
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8] mb-5">
            Four pillars of convergence
          </h2>
          <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "18px" }}>
            A unified approach to securing your enterprise across every dimension of the modern threat landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link href={service.href} className="block h-full group">
                <div
                  className="h-full p-8 rounded-2xl relative overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    boxShadow: `inset 0 2px 0 0 ${service.accent}30`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = `${service.accent}40`;
                    el.style.boxShadow = `inset 0 2px 0 0 ${service.accent}60, 0 0 30px ${service.accent}10`;
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.boxShadow = `inset 0 2px 0 0 ${service.accent}30`;
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `${service.accent}10`,
                        border: `1px solid ${service.accent}25`,
                      }}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3 tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#8896AB] leading-relaxed text-sm mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.focusAreas.map((area) => (
                        <li key={area} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: service.accent }} />
                          <span className="text-[#8896AB]/70 text-xs leading-relaxed">{area}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: service.accent }}>
                      <span>Learn more</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
