"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

const roleCategories = [
  {
    title: "Cloud & Hyperscaler Architects",
    desc: "Hyperscaler-native cloud and AI transformations across Azure, AWS, and Google Cloud.",
    color: "#F47920",
  },
  {
    title: "AI & Agentic AI Specialists",
    desc: "Copilot, GenAI, and Agentic AI enablement for enterprise-scale adoption.",
    color: "#2B7EC1",
  },
  {
    title: "Copilot & GenAI Enablement Experts",
    desc: "Drive adoption of Microsoft Copilot and generative AI solutions with governance.",
    color: "#F47920",
  },
  {
    title: "Cyber & Trust Architects",
    desc: "Cyber and trust architecture for regulated environments — zero-trust by design.",
    color: "#2B7EC1",
  },
  {
    title: "Strategy, GRC & Transformation Consultants",
    desc: "Cloud strategy, readiness assessments, and quantum readiness programs.",
    color: "#F47920",
  },
];

const culture = [
  { label: "Hyperscaler-aligned by default", color: "#F47920" },
  { label: "Strategy-led, execution-focused", color: "#2B7EC1" },
  { label: "Automation-first, not headcount-driven", color: "#F47920" },
  { label: "Ethical, responsible, and transparent", color: "#2B7EC1" },
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function CareersPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,121,32,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-6">
              Careers
            </p>
            <h1
              className="text-[#F0F4F8] mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Build the future of{" "}
              <span className="gradient-text">trust</span>
            </h1>
            <p className="text-[#8896AB] max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "18px" }}>
              We are not a traditional services firm. We are building the foundations of trust
              for the AI, cloud, and quantum era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Hire */}
      <section className="relative" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Who We Look For
            </p>
            <h2 className="text-[#F0F4F8] mb-6" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Builders, architects, and thinkers
            </h2>
            <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "18px" }}>
              We seek people who think systemically across Cloud, AI, Cyber, and Data — and who
              care about ethics, governance, and real-world impact.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "Think systemically across Cloud, AI, Cyber, and Data",
              "Care about ethics, governance, and real-world impact",
              "Prefer solving hard problems over maintaining legacy models",
              "Want to shape platforms and outcomes — not just deliver projects",
            ].map((trait) => (
              <motion.div
                key={trait}
                variants={cardVariants}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#F47920]" />
                <p className="text-[#8896AB] text-sm leading-relaxed">{trait}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Role Categories */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-4">
              Work Areas
            </p>
            <h2 className="text-[#F0F4F8]" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Where you&apos;ll work
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {roleCategories.map((role) => (
              <motion.div key={role.title} variants={cardVariants}>
                <Link
                  href={`mailto:careers@cyberaiq.com?subject=${encodeURIComponent(role.title)}`}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl group transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${role.color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${role.color}06`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: role.color }} />
                      <span className="text-[#8896AB] text-[10px] font-medium tracking-wider uppercase">
                        Open Category
                      </span>
                    </div>
                    <h3 className="text-[#F0F4F8] font-semibold text-lg group-hover:text-white transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-[#8896AB] text-sm mt-1">{role.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 md:mt-0 flex-shrink-0">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${role.color}12`, color: role.color }}
                    >
                      Enquire
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: "#8896AB" }}
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
              How We Work
            </p>
            <h2 className="text-[#F0F4F8]" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Our culture
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {culture.map((item) => (
              <motion.div
                key={item.label}
                variants={cardVariants}
                className="flex items-center gap-4 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: `inset 0 2px 0 0 ${item.color}20`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
                <p className="text-[#F0F4F8] font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center" style={{ padding: "160px 0" }}>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-[#F0F4F8] mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Don&apos;t see your role?
          </h2>
          <p className="text-[#8896AB] mb-8" style={{ fontSize: "18px" }}>
            We&apos;re always looking for exceptional talent. Send us your profile and we&apos;ll
            reach out when something fits.
          </p>
          <a
            href="mailto:careers@cyberaiq.com"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:bg-[#e06810]"
            style={{ fontSize: "16px" }}
          >
            careers@cyberaiq.com
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
