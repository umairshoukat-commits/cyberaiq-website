"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const differentiators = [
  {
    title: "Hyperscaler-Cloud-First",
    description: "Cloud-first by design across Microsoft Azure, AWS, and Google Cloud — architecture built for the hyperscaler era.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 16a4 4 0 10-.8-7.9A6 6 0 106 16" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19l3-3 3 3" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16v6" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Secure & Responsible AI",
    description: "AI-native and automation-led, with ethics, governance, and regulatory alignment built in from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#2B7EC1" strokeWidth="1.5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="7" stroke="#2B7EC1" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
    accent: "#2B7EC1",
  },
  {
    title: "No Hardware. No Legacy.",
    description: "We don\u2019t sell hardware or operate legacy models. We are an architecture-first, outcomes-driven partner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F47920" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Compliance & Ethics Driven",
    description: "Compliance, governance, and ethics driven — aligned with global standards and regional regulatory requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2B7EC1" strokeWidth="1.5" />
        <path d="M7 12l3 3 7-7" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#2B7EC1",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function AboutPage() {
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
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(244,121,32,0.06) 0%, rgba(43,126,193,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-6">
              Who We Are
            </p>
            <h1
              className="text-[#F0F4F8] mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, textWrap: "balance" } as React.CSSProperties}
            >
              Security experts{" "}
              <span className="gradient-text">built for what&apos;s next</span>
            </h1>
            <p className="text-[#8896AB] leading-relaxed max-w-2xl" style={{ fontSize: "18px" }}>
              CYBERAIQ AG is founded by serial entrepreneurs and hyperscaler leaders who have
              built one of the top cybersecurity services and solution providers globally — and led
              some of the largest cloud and cybersecurity transformations across Governments and
              Enterprises in the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
                Vision &amp; Mission
              </p>
              <h2 className="text-[#F0F4F8] mb-8" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Making enterprise security resilient, adaptive, and future-proof
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-2">Vision</p>
                  <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px" }}>
                    To become the world&apos;s most trusted partner for secure, responsible, AI-native,
                    cloud-first cyber transformation.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-2">Mission</p>
                  <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px" }}>
                    To enable organizations to create trust, resilience, and intelligence through the
                    convergence of AI, Cloud, Cyber, Data, Quantum and Automation — aligned with
                    global standards and regional regulatory requirements.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-[#F0F4F8]/60 text-sm italic leading-relaxed border-l-2 border-[#F47920]/40 pl-4">
                    &ldquo;Security is no longer a function. It is a cloud, data, automation and intelligence problem.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
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
                <p className="text-[#F0F4F8] font-semibold mb-6 text-[11px] uppercase tracking-[0.2em]">
                  Our Philosophy
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8" style={{ fontSize: "16px" }}>
                  CYBERAIQ AG exists to help organizations converge AI, Cloud, Cyber and Quantum
                  into a single strategic advantage — with ethics, governance, and regulatory
                  alignment built in from day one.
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8" style={{ fontSize: "16px" }}>
                  We don&apos;t operate security — we enable secure transformation by architecting
                  resilience, trust, and long-term adaptability.
                </p>
                <div className="pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <p className="text-[#8896AB] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">We are</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Marketplace-first",
                      "Hyperscaler-aligned",
                      "Outcome-driven",
                      "No legacy thinking",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(244,121,32,0.08)",
                          border: "1px solid rgba(244,121,32,0.2)",
                          color: "#F47920",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-4">
              What Makes Us Different
            </p>
            <h2 className="text-[#F0F4F8]" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Built for the future, not the legacy
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
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
      <section className="relative" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">Leadership</p>
            <h2 className="text-[#F0F4F8]" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              The team behind CYBERAIQ AG
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[#8896AB] leading-relaxed mb-6" style={{ fontSize: "16px" }}>
                CYBERAIQ AG is led by practitioners — not operators. Our leadership team combines
                deep hyperscaler experience, global cyber and cloud transformation leadership, and
                proven entrepreneurial success.
              </p>
              <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px" }}>
                We have built, scaled, and transformed at the highest level — and we bring that
                experience to every engagement.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { label: "Deep hyperscaler experience", color: "#F47920" },
                { label: "Global cyber and cloud transformation leadership", color: "#2B7EC1" },
                { label: "Proven entrepreneurial success", color: "#F47920" },
                { label: "Earned the highest hyperscaler credentials & global recognition", color: "#2B7EC1" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
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
