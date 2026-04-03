"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v8c0 7.2 5.2 13.9 12 15.4C23 29.9 28 23.2 28 16V8L16 3z" stroke="#F47920" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke="#2B7EC1" strokeWidth="1.5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="9" stroke="#2B7EC1" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M24 20a5 5 0 10-1-9.9A8 8 0 108 20" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 24l4-4 4 4" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20v8" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" />
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#2B7EC1" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#2B7EC1" strokeWidth="1.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#2B7EC1" strokeWidth="1.5" transform="rotate(-60 16 16)" />
        <circle cx="16" cy="16" r="2" fill="#2B7EC1" />
      </svg>
    ),
    accent: "#2B7EC1",
    href: "/services#quantum",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} id="services">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(43,126,193,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] leading-tight tracking-[-0.02em] mb-4">
            Four pillars of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F47920, #2B7EC1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              security convergence
            </span>
          </h2>
          <p className="text-[#8896AB] text-lg leading-relaxed">
            A unified approach to securing your enterprise across every dimension of the modern threat landscape.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={service.href} className="block h-full group">
                <div
                  className="h-full p-8 min-h-[300px] rounded-2xl relative overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    // Top accent line via box-shadow inset
                    boxShadow: `inset 0 2px 0 0 ${service.accent}40`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = service.accent === "#F47920"
                      ? "rgba(244,121,32,0.4)"
                      : "rgba(43,126,193,0.4)";
                    el.style.boxShadow = `inset 0 2px 0 0 ${service.accent}80, 0 0 30px ${service.accent}18`;
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.boxShadow = `inset 0 2px 0 0 ${service.accent}40`;
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Hover background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse 70% 50% at 20% 20%, ${service.accent}0d, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `${service.accent}12`,
                        border: `1px solid ${service.accent}30`,
                      }}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#F0F4F8] mb-3 tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#8896AB] leading-relaxed text-sm mb-5">
                      {service.description}
                    </p>

                    {/* Focus areas */}
                    <ul className="space-y-2 mb-6">
                      {service.focusAreas.map((area) => (
                        <li key={area} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: service.accent }} />
                          <span className="text-[#8896AB]/80 text-xs leading-relaxed">{area}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tagline */}
                    <p className="text-xs italic mb-5 leading-relaxed" style={{ color: `${service.accent}cc` }}>
                      &ldquo;{service.tagline}&rdquo;
                    </p>

                    {/* Arrow CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: service.accent }}>
                      <span>Learn more</span>
                      <svg
                        width="16"
                        height="16"
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
        </div>
      </div>
    </section>
  );
}
