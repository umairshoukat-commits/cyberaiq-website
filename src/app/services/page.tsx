"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import { gsap, SplitText } from "@/lib/gsap";
import { fadeUp } from "@/lib/variants";

const services = [
  {
    id: "cyber",
    tag: "01",
    title: "Cyber Transformation",
    subtitle: "Modernize your entire security posture",
    description:
      "We help organizations redesign security architectures for a cloud-first, identity-driven, data-centric world.",
    capabilities: [
      "Hyperscaler security architecture & design",
      "Cloud-native security foundations",
      "Identity, data, and zero-trust transformation",
      "Governance, risk, and compliance by design",
    ],
    tagline: "Converging architectural trust for the era of intelligence",
    color: "#F47920",
  },
  {
    id: "ai",
    tag: "02",
    title: "AI Enablement & Automation",
    subtitle: "Harness AI for security and operational excellence",
    description:
      "We enable Secure & Responsible AI as a first-class capability — not an add-on.",
    capabilities: [
      "AI Agents on SaaS Platform for advanced analytics, decision support, and automation",
      "AI-driven Cybersecurity solutions for proactive threat detection and adaptive defense",
      "LLM Integration Services for enterprise-scale AI adoption with privacy and compliance by design",
      "Security workflow automation & Data readiness for AI adoption",
    ],
    tagline:
      "AI is not a tool. It is the operating model — secure, ethical, and accountable by design",
    color: "#2B7EC1",
  },
  {
    id: "cloud",
    tag: "03",
    title: "Cloud Transformation",
    subtitle: "Secure, scalable cloud infrastructure",
    description:
      "We help organizations adopt and evolve cloud as a strategic platform — not a lift-and-shift exercise. Our focus is clarity, readiness, and execution across public cloud environments.",
    capabilities: [
      "Cloud Migration Services optimized for security, compliance, and AI readiness",
      "Cloud strategy and target operating models",
      "Cloud readiness and migration assessments",
      "Landing zone and architecture design",
      "Workload adoption and migration roadmaps",
    ],
    tagline:
      "Cloud is the foundation. Strategy defines the path. Execution creates scale.",
    color: "#F47920",
  },
  {
    id: "quantum",
    tag: "04",
    title: "Quantum Readiness & Cryptographic Transformation",
    subtitle: "Prepare for the post-quantum era",
    description: "Quantum is not theoretical. It is a timeline risk.",
    capabilities: [
      "Quantum risk assessments",
      "Post-quantum cryptography readiness",
      "Crypto-agility strategy",
      "Post-Quantum Readiness strategies to future-proof critical infrastructures",
    ],
    tagline: "Prepare now. Transition safely.",
    color: "#2B7EC1",
  },
  {
    id: "marketplace",
    tag: "05",
    title: "Marketplace-First Acceleration",
    subtitle: "Unlock hyperscaler cloud commitments",
    description:
      "Cloud commitments are growing faster than value realization. Enterprises and governments invest heavily through Azure, AWS, and Google Cloud, yet struggle to convert committed spend into measurable outcomes — especially across security, AI, and critical platforms.",
    capabilities: [
      "Unlock value from hyperscaler marketplaces",
      "Enable third-party solutions to be procured through the cloud",
      "Align purchases to existing cloud commitments",
      "Accelerate adoption without increasing net spend",
    ],
    tagline: "Spend smarter. Move faster. Stay cloud-native.",
    color: "#F47920",
  },
];

export default function ServicesPage() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    const split = SplitText.create(h1Ref.current, { type: "words", mask: "words" });
    gsap.from(split.words, {
      y: "100%",
      duration: 1.2,
      stagger: 0.04,
      ease: "expo.out",
    });
    return () => split.revert();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "180px", paddingBottom: "100px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(43,126,193,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-6">
              Services
            </p>
            <h1
              ref={h1Ref}
              className="text-[#F0F4F8] mb-6"
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Our Services
            </h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#8896AB] leading-relaxed"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              A unified security transformation practice built for the complexity
              of the modern enterprise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="relative overflow-hidden"
          style={{
            padding: "160px 0",
            background: i % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                className={i % 2 === 1 ? "lg:order-2" : ""}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="text-6xl font-black opacity-[0.05] text-[#F0F4F8] block mb-2">
                  {service.tag}
                </span>
                <p
                  className="text-[11px] tracking-[0.15em] uppercase font-semibold mb-4"
                  style={{ color: service.color }}
                >
                  {service.subtitle}
                </p>
                <h2
                  className="text-[#F0F4F8] mb-6"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 48px)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-[#8896AB] leading-relaxed mb-6"
                  style={{ fontSize: "16px", lineHeight: 1.7 }}
                >
                  {service.description}
                </p>
                <p
                  className="text-sm italic leading-relaxed mb-8 border-l-2 pl-4"
                  style={{
                    color: `${service.color}cc`,
                    borderColor: `${service.color}40`,
                  }}
                >
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: service.color,
                    color: "white",
                    boxShadow: `0 8px 24px ${service.color}30`,
                  }}
                >
                  Discuss this service
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                className={`rounded-2xl p-8${i % 2 === 1 ? " lg:order-1" : ""}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${service.color}25`,
                }}
              >
                <h3 className="text-[#F0F4F8] font-semibold mb-6 text-[11px] uppercase tracking-[0.15em]">
                  Focus Areas
                </h3>
                <ul className="space-y-5">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-4">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: `${service.color}10`,
                          border: `1px solid ${service.color}25`,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: service.color }}
                        />
                      </div>
                      <span className="text-[#8896AB] leading-relaxed text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1280px] mx-auto px-6 md:px-20 text-center"
        >
          <h2
            className="text-[#F0F4F8] mb-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Ready to get started?
          </h2>
          <p className="text-[#8896AB] mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Talk to our experts about which services are right for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:bg-[#c96218]"
            style={{ fontSize: "16px" }}
          >
            Start a Strategic Conversation
          </Link>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
