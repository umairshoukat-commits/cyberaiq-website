"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import { gsap, SplitText } from "@/lib/gsap";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const traits = [
  "Think systemically across Cloud, AI, Cyber, and Data",
  "Care about ethics, governance, and real-world impact",
  "Prefer solving hard problems over maintaining legacy models",
  "Want to shape platforms and outcomes — not just deliver projects",
];

const workAreas = [
  "Hyperscaler-native cloud and AI transformations",
  "Copilot, GenAI, and Agentic AI enablement",
  "Cloud strategy, readiness, and migration programs",
  "Cyber and trust architecture for regulated environments",
  "Quantum readiness and future-proof cryptographic strategies",
];

const culture = [
  { label: "Hyperscaler-aligned by default", color: "#F47920" },
  { label: "Strategy-led, execution-focused", color: "#2B7EC1" },
  { label: "Automation-first, not headcount-driven", color: "#F47920" },
  { label: "Ethical, responsible, and transparent", color: "#2B7EC1" },
];

const growth = [
  "Exposure to global hyperscaler ecosystems",
  "Working directly with founders and senior leaders",
  "Continuous learning across AI, cloud, cyber, and quantum",
  "Building capabilities that stay relevant as technology shifts",
];

const roleCategories = [
  {
    title: "Cloud & Hyperscaler Architects",
    color: "#F47920",
  },
  {
    title: "AI & Agentic AI Specialists",
    color: "#2B7EC1",
  },
  {
    title: "Copilot & GenAI Enablement Experts",
    color: "#F47920",
  },
  {
    title: "Cyber & Trust Architects",
    color: "#2B7EC1",
  },
  {
    title: "Strategy, GRC & Transformation Consultants",
    color: "#F47920",
  },
];

export default function CareersPage() {
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
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,121,32,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-6">
              Careers
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
              Build the foundations of trust for the AI, cloud, and quantum era
            </h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#8896AB] leading-relaxed max-w-2xl"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              CYBERAIQ AG is not a traditional services firm. We are building the foundations of
              trust for the AI, cloud, and quantum era. If you are driven by intelligence, impact,
              and responsibility, you will feel at home here.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who We Look For */}
      <section
        className="relative"
        style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Who We Look For
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
              Builders, architects, and thinkers
            </h2>
            <p
              className="text-[#8896AB] leading-relaxed"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              We are looking for builders, architects, and thinkers who:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {traits.map((trait) => (
              <motion.div
                key={trait}
                variants={staggerItem}
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

      {/* What You'll Work On */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
              What You&apos;ll Work On
            </p>
            <h2
              className="text-[#F0F4F8]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Meaningful, future-facing work
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 mb-10"
          >
            {workAreas.map((area, i) => (
              <motion.div
                key={area}
                variants={staggerItem}
                className="flex items-start gap-5 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: i % 2 === 0 ? "rgba(244,121,32,0.1)" : "rgba(43,126,193,0.1)",
                    border:
                      i % 2 === 0
                        ? "1px solid rgba(244,121,32,0.25)"
                        : "1px solid rgba(43,126,193,0.25)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: i % 2 === 0 ? "#F47920" : "#2B7EC1" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  {area}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#8896AB] italic text-sm border-l-2 pl-4"
            style={{ borderColor: "rgba(244,121,32,0.4)" }}
          >
            All work is cloud-first, AI-aware, and compliance-by-design.
          </motion.p>
        </div>
      </section>

      {/* How We Work */}
      <section
        className="relative"
        style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
              How We Work
            </p>
            <h2
              className="text-[#F0F4F8]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Our culture
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {culture.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
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

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#F0F4F8]/60 text-sm italic leading-relaxed border-l-2 pl-4"
            style={{ borderColor: "rgba(43,126,193,0.4)" }}
          >
            &ldquo;We don&apos;t believe in managed services. We believe in architecting resilience
            and enabling scale.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Growth */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
              Growth
            </p>
            <h2
              className="text-[#F0F4F8]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              How you&apos;ll grow
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            {growth.map((item, i) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: i % 2 === 0 ? "#F47920" : "#2B7EC1" }}
                />
                <p className="text-[#8896AB] text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#F0F4F8]/60 text-sm italic leading-relaxed border-l-2 pl-4"
            style={{ borderColor: "rgba(244,121,32,0.4)" }}
          >
            &ldquo;We invest in people who invest in thinking.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Open Roles */}
      <section
        className="relative"
        style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Open Roles
            </p>
            <h2
              className="text-[#F0F4F8]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Current opportunities
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {roleCategories.map((role) => (
              <motion.div key={role.title} variants={staggerItem}>
                <Link
                  href={`mailto:careers@cyberaiq.com?subject=${encodeURIComponent(role.title)}`}
                  className="flex items-center justify-between p-6 rounded-2xl group transition-all duration-300 hover:border-accent/30"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${role.color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${role.color}06`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.02)";
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: role.color }}
                    />
                    <h3 className="text-[#F0F4F8] font-semibold group-hover:text-white transition-colors">
                      {role.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
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
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center" style={{ padding: "160px 0" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto px-6"
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
            Explore opportunities
          </h2>
          <p className="text-[#8896AB] mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            To explore opportunities, reach out to:
          </p>
          <a
            href="mailto:careers@cyberaiq.com"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:bg-[#c96218]"
            style={{ fontSize: "16px" }}
          >
            careers@cyberaiq.com
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
