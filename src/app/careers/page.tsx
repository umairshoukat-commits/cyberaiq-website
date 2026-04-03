"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

// Role categories from cyberaiq.com — no invented job listings
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

// Culture pillars from cyberaiq.com
const culture = [
  { label: "Hyperscaler-aligned by default", color: "#F47920" },
  { label: "Strategy-led, execution-focused", color: "#2B7EC1" },
  { label: "Automation-first, not headcount-driven", color: "#F47920" },
  { label: "Ethical, responsible, and transparent", color: "#2B7EC1" },
];

export default function CareersPage() {
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
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,121,32,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-6 block">
              Careers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F0F4F8] leading-tight tracking-[-0.02em] mb-6">
              Build the future of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F47920, #2B7EC1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                trust
              </span>
            </h1>
            <p className="text-[#8896AB] text-xl max-w-2xl mx-auto leading-relaxed">
              We are not a traditional services firm. We are building the foundations of trust
              for the AI, cloud, and quantum era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Hire */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-2xl"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">
              Who We Look For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em] mb-6">
              Builders, architects, and thinkers
            </h2>
            <p className="text-[#8896AB] text-lg leading-relaxed">
              We seek people who think systemically across Cloud, AI, Cyber, and Data — and who
              care about ethics, governance, and real-world impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "Think systemically across Cloud, AI, Cyber, and Data",
              "Care about ethics, governance, and real-world impact",
              "Prefer solving hard problems over maintaining legacy models",
              "Want to shape platforms and outcomes — not just deliver projects",
            ].map((trait, i) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Open Role Categories */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-4 block">
              Work Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em]">
              Where you&apos;ll work
            </h2>
          </motion.div>

          <div className="space-y-4">
            {roleCategories.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <Link
                  href={`mailto:careers@cyberaiq.com?subject=${encodeURIComponent(role.title)}`}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl group transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = role.color === "#F47920"
                      ? "rgba(244,121,32,0.3)"
                      : "rgba(43,126,193,0.3)";
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
                      <span className="text-[#8896AB] text-xs font-medium tracking-wide uppercase">
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
                      style={{ background: `${role.color}15`, color: role.color }}
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
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em]">
              Our culture
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {culture.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: `inset 0 2px 0 0 ${item.color}25`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
                <p className="text-[#F0F4F8] font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            Don&apos;t see your role?
          </h2>
          <p className="text-[#8896AB] mb-8 text-lg leading-relaxed">
            We&apos;re always looking for exceptional talent. Send us your profile and we&apos;ll
            reach out when something fits.
          </p>
          <a
            href="mailto:careers@cyberaiq.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F47920] text-white font-semibold hover:bg-[#e06810] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
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
