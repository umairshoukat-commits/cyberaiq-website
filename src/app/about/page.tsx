"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";

// What Makes Us Different — from cyberaiq.com
const differentiators = [
  {
    title: "Hyperscaler-Cloud-First",
    description: "Cloud-first by design across Microsoft Azure, AWS, and Google Cloud — architecture built for the hyperscaler era.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 16a4 4 0 10-.8-7.9A6 6 0 106 16" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 19l3-3 3 3" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16v6" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Secure & Responsible AI",
    description: "AI-native and automation-led, with ethics, governance, and regulatory alignment built in from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#2B7EC1" strokeWidth="1.5"/>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="7" stroke="#2B7EC1" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    ),
    accent: "#2B7EC1",
  },
  {
    title: "No Hardware. No Legacy.",
    description: "We don't sell hardware or operate legacy models. We are an architecture-first, outcomes-driven partner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F47920" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#F47920",
  },
  {
    title: "Compliance & Ethics Driven",
    description: "Compliance, governance, and ethics driven — aligned with global standards and regional regulatory requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2B7EC1" strokeWidth="1.5"/>
        <path d="M7 12l3 3 7-7" stroke="#2B7EC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#2B7EC1",
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
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
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(244,121,32,0.08) 0%, rgba(43,126,193,0.05) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-6 block">
              Who We Are
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F0F4F8] leading-[1.1] tracking-[-0.02em] mb-8"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Security experts{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F47920, #2B7EC1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                built for what&apos;s next
              </span>
            </h1>
            <p className="text-[#8896AB] text-lg md:text-xl leading-relaxed max-w-2xl">
              CYBERAIQ AG is founded by serial entrepreneurs and hyperscaler leaders who have
              built one of the top cybersecurity services and solution providers globally — and led
              some of the largest cloud and cybersecurity transformations across Governments and
              Enterprises in the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">
                Vision &amp; Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] mb-8 leading-tight tracking-[-0.02em]">
                Making enterprise security resilient, adaptive, and future-proof
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[#F47920] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Vision</p>
                  <p className="text-[#8896AB] leading-relaxed">
                    To become the world&apos;s most trusted partner for secure, responsible, AI-native,
                    cloud-first cyber transformation.
                  </p>
                </div>
                <div>
                  <p className="text-[#2B7EC1] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Mission</p>
                  <p className="text-[#8896AB] leading-relaxed">
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
            </AnimatedSection>

            <AnimatedSection>
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#F0F4F8] font-semibold mb-6 text-sm uppercase tracking-widest">
                  Our Philosophy
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8">
                  CYBERAIQ AG exists to help organizations converge AI, Cloud, Cyber and Quantum
                  into a single strategic advantage — with ethics, governance, and regulatory
                  alignment built in from day one.
                </p>
                <p className="text-[#8896AB] leading-relaxed mb-8">
                  We don&apos;t operate security — we enable secure transformation by architecting
                  resilience, trust, and long-term adaptability.
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[#8896AB] text-xs font-medium uppercase tracking-wider mb-3">We are</p>
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Makes Us Different — replaces invented values */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-4 block">
              What Makes Us Different
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em]">
              Built for the future, not the legacy
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 rounded-2xl min-h-[200px]"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${item.accent}30`,
                }}
              >
                {/* Proper SVG icon in a styled container — no emoji */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}35`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-[#F0F4F8] font-semibold mb-3 leading-snug">{item.title}</h3>
                <p className="text-[#8896AB] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em]">
              The team behind CYBERAIQ AG
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[#8896AB] leading-relaxed mb-6">
                CYBERAIQ AG is led by practitioners — not operators. Our leadership team combines
                deep hyperscaler experience, global cyber and cloud transformation leadership, and
                proven entrepreneurial success.
              </p>
              <p className="text-[#8896AB] leading-relaxed">
                We have built, scaled, and transformed at the highest level — and we bring that
                experience to every engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { label: "Deep hyperscaler experience", color: "#F47920" },
                { label: "Global cyber and cloud transformation leadership", color: "#2B7EC1" },
                { label: "Proven entrepreneurial success", color: "#F47920" },
                { label: "Earned the highest hyperscaler credentials & global recognition", color: "#2B7EC1" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <p className="text-[#8896AB] text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
