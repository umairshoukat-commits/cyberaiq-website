"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { gsap, SplitText } from "@/lib/gsap";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const differentiators = [
  {
    title: "Hyperscaler-Cloud-First",
    description:
      "Cloud-first by design across Microsoft Azure, AWS, and Google Cloud — architecture built for the hyperscaler era.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 16a4 4 0 10-.8-7.9A6 6 0 106 16"
          stroke="#F47920"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 19l3-3 3 3"
          stroke="#F47920"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 16v6" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Secure & Responsible AI",
    description:
      "AI-native and automation-led, with ethics, governance, and regulatory alignment built in from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#2B7EC1" strokeWidth="1.5" />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2"
          stroke="#2B7EC1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="7" stroke="#2B7EC1" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
    accent: "#2B7EC1",
  },
  {
    title: "No Hardware. No Legacy.",
    description:
      "We don\u2019t sell hardware or operate legacy models. We are an architecture-first, outcomes-driven partner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="#F47920"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#F47920"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Compliance & Ethics Driven",
    description:
      "Compliance, governance, and ethics driven — aligned with global standards and regional regulatory requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2B7EC1" strokeWidth="1.5" />
        <path
          d="M7 12l3 3 7-7"
          stroke="#2B7EC1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "#2B7EC1",
  },
];

const accomplishments = [
  "Built one of the top cybersecurity services and solution providers globally",
  "Led some of the largest and most complex cloud and cybersecurity transformations across Governments and Enterprises in the ME",
  "Earned the highest hyperscaler credentials and global recognition",
];

const leadershipTraits = [
  { label: "Deep hyperscaler experience", color: "#F47920" },
  { label: "Global cyber and cloud transformation leadership", color: "#2B7EC1" },
  { label: "Proven entrepreneurial success", color: "#F47920" },
  { label: "Earned the highest hyperscaler credentials & global recognition", color: "#2B7EC1" },
];

export default function AboutPage() {
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
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(244,121,32,0.06) 0%, rgba(43,126,193,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-6">
              Who We Are
            </p>
            <h1
              ref={h1Ref}
              className="text-[#F0F4F8] mb-8"
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Serial entrepreneurs and hyperscaler leaders building the future of trust
            </h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#8896AB] leading-relaxed max-w-2xl"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              CYBERAIQ AG is founded by serial entrepreneurs and hyperscaler leaders who have
              built one of the top cybersecurity services and solution providers globally
              — and led some of the largest cloud and cybersecurity transformations across
              Governments and Enterprises in the Middle East.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Accomplishments */}
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
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Accomplishments
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
              What we have built
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 mb-12"
          >
            {accomplishments.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(244,121,32,0.1)",
                    border: "1px solid rgba(244,121,32,0.25)",
                  }}
                >
                  <span className="text-[#F47920] text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#8896AB] leading-relaxed max-w-3xl"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            We bring together deep cyber expertise, AI-first thinking, and hyperscaler-native
            execution to create secure, compliant, and measurable outcomes at scale.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
                Vision &amp; Mission
              </p>
              <h2
                className="text-[#F0F4F8] mb-8"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Making enterprise security resilient, adaptive, and future-proof
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-2">
                    Vision
                  </p>
                  <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                    To become the world&apos;s most trusted partner for AI-native, cloud-first
                    cyber transformation.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-2">
                    Mission
                  </p>
                  <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                    To enable organizations to create trust, resilience, and intelligence through the
                    convergence of AI, Cloud, Cyber, Data, Quantum and Automation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#F0F4F8] font-semibold mb-6 text-[11px] uppercase tracking-[0.15em]">
                  Our Philosophy
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-6" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  CYBERAIQ AG exists to help organizations converge AI, Cloud, Cyber and Quantum
                  into a single strategic advantage — with ethics, governance, and regulatory
                  alignment built in from day one.
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  We don&apos;t operate security — we enable secure transformation by architecting
                  resilience, trust, and long-term adaptability.
                </p>
                <div className="pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <p
                    className="text-[#F0F4F8]/60 text-sm italic leading-relaxed border-l-2 pl-4"
                    style={{ borderColor: "rgba(244,121,32,0.4)" }}
                  >
                    &ldquo;Security is no longer a function. It is a cloud, data, automation and
                    intelligence problem.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
              What Makes Us Different
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
              Built for the future, not the legacy
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${item.accent}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.accent}10`,
                    border: `1px solid ${item.accent}25`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-[#F0F4F8] font-semibold mb-3 leading-snug">{item.title}</h3>
                <p className="text-[#8896AB] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Leadership
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
              The team behind CYBERAIQ AG
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[#8896AB] leading-relaxed mb-6" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                CYBERAIQ AG is led by practitioners — not operators. Our leadership team combines
                deep hyperscaler experience, global cyber and cloud transformation leadership, and
                proven entrepreneurial success.
              </p>
              <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                We have built, scaled, and transformed at the highest level — and we bring that
                experience to every engagement.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {leadershipTraits.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <p className="text-[#8896AB] text-sm leading-relaxed">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
