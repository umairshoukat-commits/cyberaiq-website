"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gsap, SplitText } from "@/lib/gsap";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const threats = [
  "Adversarial attacks and model manipulation",
  "Data poisoning and integrity loss",
  "Model drift, bias, and performance degradation",
  "Cloud outages and infrastructure instability",
  "Operational bottlenecks and workflow disruption",
  "Emerging quantum era threats",
];

const pillars = [
  {
    number: "01",
    title: "Secure Intelligence",
    description:
      "AI hardened against adversarial threats, data corruption, and unauthorized access. Security is embedded at every layer — from model training to deployment.",
    color: "#F47920",
  },
  {
    number: "02",
    title: "Cloud Native Robustness",
    description:
      "Distributed, scalable, fault-tolerant AI that stays available even when systems fail. Designed for hyperscaler-grade reliability.",
    color: "#2B7EC1",
  },
  {
    number: "03",
    title: "Continuous Model Integrity",
    description:
      "Real-time monitoring, drift detection, and automated recalibration keep AI accurate, fair, and aligned with business goals.",
    color: "#F47920",
  },
  {
    number: "04",
    title: "Operational Continuity",
    description:
      "AI that keeps your workflows running — even under pressure. Failover logic, redundancy, and intelligent fallback ensure uninterrupted performance.",
    color: "#2B7EC1",
  },
  {
    number: "05",
    title: "Human AI Governance",
    description:
      "Clear oversight, transparent decisioning, and human-in-the-loop controls. Resilience means people stay empowered, not replaced.",
    color: "#F47920",
  },
  {
    number: "06",
    title: "Quantum Readiness",
    description:
      "Preparing your AI for the next computational era. Post-quantum cryptography and forward-secure architectures ensure long-term protection.",
    color: "#2B7EC1",
  },
];

const benefits = [
  "Trust — from customers, regulators, and partners",
  "Continuity — even during outages or attacks",
  "Competitive advantage — through reliable, scalable intelligence",
  "Future proofing — against quantum and next generation threats",
  "Operational excellence — with AI that strengthens, not slows, the business",
];

export default function AIResiliencePage() {
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
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(244,121,32,0.08) 0%, rgba(43,126,193,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-accent mb-6">
              AI Resilience
            </p>
            <h1
              ref={h1Ref}
              className="text-text-0 mb-6"
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              AI RESILIENCE
            </h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-text-1 leading-relaxed max-w-xl"
              style={{ fontSize: "18px", lineHeight: 1.7 }}
            >
              Intelligence That Endures. Security That Adapts. Trust That Scales.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Opening */}
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
            className="max-w-3xl space-y-6"
          >
            <p className="text-text-2 leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              AI is now the engine of modern business — but only resilient AI can survive the
              velocity of today&apos;s threats, disruptions, and technological shifts.
            </p>
            <p className="text-text-2 leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              At CYBERAIQ AG, we Architect AI systems that don&apos;t just work. They withstand.
              Adapt. Evolve.
            </p>
            <p
              className="text-text-0/60 text-sm italic leading-relaxed border-l-2 pl-4"
              style={{ borderColor: "rgba(244,121,32,0.4)" }}
            >
              This is intelligence built for the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What AI Resilience Means */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
              Definition
            </p>
            <h2
              className="text-text-0 mb-8"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              What AI Resilience Means
            </h2>
            <p
              className="text-text-2 leading-relaxed max-w-3xl mb-10"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              AI Resilience is the capability of intelligent systems to remain secure, reliable,
              and aligned even under stress. It&apos;s the fusion of cybersecurity, cloud
              robustness, operational continuity, and human-centric governance — all working
              together to ensure AI remains a strategic asset, not a point of failure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10"
          >
            <p className="text-text-0 font-semibold text-sm mb-6">It protects from:</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            {threats.map((threat, i) => (
              <motion.div
                key={threat}
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
                <p className="text-text-2 text-sm leading-relaxed">{threat}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-text-0/60 text-sm italic leading-relaxed border-l-2 pl-4"
            style={{ borderColor: "rgba(244,121,32,0.4)" }}
          >
            Resilience is not a feature. It&apos;s a foundation.
          </motion.p>
        </div>
      </section>

      {/* The Framework - 6 Pillars */}
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
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-accent mb-4">
              The Framework
            </p>
            <h2
              className="text-text-0"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              The CYBERAIQ AG AI Resilience Framework
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.number}
                variants={staggerItem}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${pillar.color}25`,
                }}
              >
                <span
                  className="text-4xl font-black block mb-4"
                  style={{ color: pillar.color, opacity: 0.2 }}
                >
                  {pillar.number}
                </span>
                <h3 className="text-text-0 font-semibold mb-3 text-lg leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-text-2 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
              Why It Matters
            </p>
            <h2
              className="text-text-0 mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Why AI Resilience Matters Now
            </h2>
            <p
              className="text-text-2 leading-relaxed max-w-3xl"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              AI is no longer optional — it&apos;s mission-critical. But mission-critical systems
              must be resilient, not fragile.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 mb-10"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                variants={staggerItem}
                className="flex items-start gap-5 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: i % 2 === 0 ? "#F47920" : "#2B7EC1" }}
                />
                <p className="text-text-2 leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-text-0/60 text-sm italic leading-relaxed border-l-2 pl-4"
            style={{ borderColor: "rgba(43,126,193,0.4)" }}
          >
            Resilience is the new currency of trust.
          </motion.p>
        </div>
      </section>

      {/* Closing */}
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
            className="max-w-3xl space-y-6"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-accent mb-4">
              Our Approach
            </p>
            <h2
              className="text-text-0 mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              We build AI that doesn&apos;t just perform — it endures.
            </h2>
            <p className="text-text-2 leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Our approach blends deep cybersecurity expertise, cloud engineering mastery, and
              forward-looking quantum readiness. The result is AI that becomes stronger with
              every challenge. This is resilience engineered for the enterprises that refuse to
              break.
            </p>
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
            className="text-text-0 mb-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Ready to Build Resilient Intelligence?
          </h2>
          <p className="text-text-2 mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            CYBERAIQ AG helps organizations design, deploy, and scale AI systems that are
            secure, robust, and future-ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-accent text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:bg-accent-dim"
            style={{ fontSize: "16px" }}
          >
            Let&apos;s build intelligence that lasts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
      </section>

      <Footer />
    </motion.main>
  );
}
