"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

// All service content is verbatim from cyberaiq.com
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
    tagline: "AI is not a tool. It is the operating model — secure, ethical, and accountable by design",
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
    tagline: "Cloud is the foundation. Strategy defines the path. Execution creates scale.",
    color: "#F47920",
  },
  {
    id: "quantum",
    tag: "04",
    title: "Quantum Readiness & Cryptographic Transformation",
    subtitle: "Prepare for the post-quantum era",
    description:
      "Quantum is not theoretical. It is a timeline risk.",
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
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(43,126,193,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-6 block">
              Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F0F4F8] leading-tight tracking-[-0.02em] mb-6">
              Five pillars.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F47920, #2B7EC1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One vision.
              </span>
            </h1>
            <p className="text-[#8896AB] text-xl leading-relaxed">
              A unified security transformation practice built for the complexity of the modern enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="py-32 px-6 border-t relative overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                className={i % 2 === 1 ? "lg:order-2" : ""}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-6xl font-black opacity-[0.07] text-[#F0F4F8] block mb-2">
                  {service.tag}
                </span>
                <span
                  className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
                  style={{ color: service.color }}
                >
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] mb-6 leading-tight tracking-[-0.02em]">
                  {service.title}
                </h2>
                <p className="text-[#8896AB] text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <p
                  className="text-sm italic leading-relaxed mb-8 border-l-2 pl-4"
                  style={{ color: `${service.color}cc`, borderColor: `${service.color}40` }}
                >
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: service.color,
                    color: "white",
                    boxShadow: `0 8px 24px ${service.color}30`,
                  }}
                >
                  Discuss this service
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                className={`rounded-2xl p-8${i % 2 === 1 ? " lg:order-1" : ""}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${service.color}30`,
                }}
              >
                <h3 className="text-[#F0F4F8] font-semibold mb-6 text-xs uppercase tracking-[0.25em]">
                  Focus Areas
                </h3>
                <ul className="space-y-5">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-4">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
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
      <section className="py-32 px-6 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#8896AB] mb-8 text-lg">
            Talk to our experts about which services are right for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F47920] text-white font-semibold hover:bg-[#e06810] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
          >
            Start a Strategic Conversation
          </Link>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
