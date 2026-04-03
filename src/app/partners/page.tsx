"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

const partners = [
  {
    name: "Microsoft",
    color: "#00A4EF",
    logo: (
      <svg width="140" height="30" viewBox="0 0 140 30" fill="none">
        <rect x="0" y="0" width="13" height="13" fill="#F25022" />
        <rect x="14.5" y="0" width="13" height="13" fill="#7FBA00" />
        <rect x="0" y="14.5" width="13" height="13" fill="#00A4EF" />
        <rect x="14.5" y="14.5" width="13" height="13" fill="#FFB900" />
        <text x="34" y="20" fill="#F0F4F8" fontSize="14" fontFamily="'Segoe UI',system-ui,sans-serif" fontWeight="600">Microsoft</text>
      </svg>
    ),
    description:
      "Microsoft forms the backbone of our security and AI architecture — spanning Azure, Microsoft Security, and Copilot. We help organizations maximize the full power of the Microsoft cloud.",
    solutions: [
      "Microsoft Azure & Security Center",
      "Microsoft Sentinel",
      "Microsoft Defender XDR",
      "Entra ID & Zero Trust",
      "Microsoft Copilot & AI Security",
      "Microsoft 365 Security",
    ],
  },
  {
    name: "Amazon Web Services",
    color: "#FF9900",
    logo: (
      <svg width="100" height="36" viewBox="0 0 100 36" fill="none">
        <text x="0" y="22" fill="#F0F4F8" fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="0.5">aws</text>
        <path d="M4 28 Q22 33.5 44 30" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M41 28 l4.5 2.5 l-2 3" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    description:
      "Our AWS partnership enables us to deliver security architecture, compliance, and DevSecOps solutions on the world\u2019s leading cloud platform — securing workloads end to end.",
    solutions: [
      "AWS Security Hub",
      "Amazon GuardDuty",
      "AWS WAF & Shield",
      "AWS IAM & Organizations",
      "AWS Config & Compliance",
      "Cloud Migration & Landing Zones",
    ],
  },
  {
    name: "Google Cloud",
    color: "#4285F4",
    logo: (
      <svg width="160" height="30" viewBox="0 0 160 30" fill="none">
        <circle cx="10" cy="15" r="9" stroke="#4285F4" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="-7" />
        <circle cx="10" cy="15" r="9" stroke="#EA4335" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="7" />
        <circle cx="10" cy="15" r="9" stroke="#FBBC05" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="21" />
        <circle cx="10" cy="15" r="9" stroke="#34A853" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="35" />
        <line x1="10" y1="15" x2="19" y2="15" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
        <text x="26" y="20" fill="#F0F4F8" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="500">Google Cloud</text>
      </svg>
    ),
    description:
      "Our Google Cloud partnership covers Chronicle SIEM, Security Command Center, and Workspace security — leveraging Google\u2019s AI-native security capabilities for enterprise clients.",
    solutions: [
      "Google Chronicle SIEM",
      "Security Command Center",
      "Google Workspace Security",
      "BeyondCorp Enterprise",
      "Cloud Armor",
      "GKE Security & Architecture",
    ],
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

export default function PartnersPage() {
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
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(43,126,193,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-6">
              Partners
            </p>
            <h1
              className="text-[#F0F4F8] mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, textWrap: "balance" } as React.CSSProperties}
            >
              World-class{" "}
              <span className="gradient-text">partnerships</span>
            </h1>
            <p className="text-[#8896AB] leading-relaxed max-w-xl mx-auto" style={{ fontSize: "18px" }}>
              CYBERAIQ AG is built natively on the world&apos;s leading hyperscalers, forming the
              foundation of our architecture, automation, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner sections */}
      {partners.map((partner, i) => (
        <section
          key={partner.name}
          className="relative"
          style={{ padding: "160px 0", background: i % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent" }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-6">{partner.logo}</div>
                <h2 className="text-[#F0F4F8] mb-6" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  {partner.name}
                </h2>
                <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px" }}>
                  {partner.description}
                </p>
              </div>

              <div
                className={`p-8 rounded-2xl${i % 2 === 1 ? " lg:order-1" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `inset 0 2px 0 0 ${partner.color}25`,
                }}
              >
                <h3 className="text-[#F0F4F8] font-semibold mb-6 text-[11px] uppercase tracking-[0.2em]">
                  Solutions &amp; Platforms
                </h3>
                <ul className="space-y-4">
                  {partner.solutions.map((s) => (
                    <li key={s} className="flex items-center gap-4">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${partner.color}10`,
                          border: `1px solid ${partner.color}25`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: partner.color }} />
                      </div>
                      <span className="text-[#8896AB] text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative" style={{ padding: "160px 0" }}>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1280px] mx-auto px-6 md:px-20 text-center"
        >
          <h2 className="text-[#F0F4F8] mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Partner with CYBERAIQ AG
          </h2>
          <p className="text-[#8896AB] mb-8" style={{ fontSize: "18px" }}>
            Are you a technology vendor or integrator looking to build joint solutions? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:bg-[#e06810]"
            style={{ fontSize: "16px" }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
