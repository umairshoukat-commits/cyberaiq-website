"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Microsoft",
    logo: (
      <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="2" width="12" height="12" fill="#F25022" />
        <rect x="13.5" y="2" width="12" height="12" fill="#7FBA00" />
        <rect x="0" y="15.5" width="12" height="12" fill="#00A4EF" />
        <rect x="13.5" y="15.5" width="12" height="12" fill="#FFB900" />
        <text x="32" y="19" fill="rgba(240,244,248,0.9)" fontSize="14" fontFamily="'Segoe UI',system-ui,-apple-system,sans-serif" fontWeight="600">Microsoft</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg width="76" height="40" viewBox="0 0 76 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fill="rgba(240,244,248,0.9)" fontSize="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" letterSpacing="1">aws</text>
        <path d="M3 30 Q19 36 40 32" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M37 30.5 l4.5 2 l-1.5 3.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    logo: (
      <svg width="162" height="28" viewBox="0 0 162 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="14" r="9" stroke="#4285F4" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="-7" />
        <circle cx="10" cy="14" r="9" stroke="#EA4335" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="7" />
        <circle cx="10" cy="14" r="9" stroke="#FBBC05" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="21" />
        <circle cx="10" cy="14" r="9" stroke="#34A853" strokeWidth="3" fill="none" strokeDasharray="14 42" strokeDashoffset="35" />
        <line x1="10" y1="14" x2="19" y2="14" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
        <text x="26" y="19" fill="rgba(240,244,248,0.9)" fontSize="14" fontFamily="'Google Sans',system-ui,-apple-system,sans-serif" fontWeight="500">Google Cloud</text>
      </svg>
    ),
  },
];

const tickerItems = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }} id="partners">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 mb-14">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
            Hyperscaler Partners
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8] mb-5">
            Built on world-class infrastructure
          </h2>
          <p className="text-[#8896AB] max-w-xl mx-auto leading-relaxed" style={{ fontSize: "18px" }}>
            CYBERAIQ AG is built natively on the world&apos;s leading hyperscalers, forming the
            foundation of our architecture, automation, and scale.
          </p>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #080B10, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #080B10, transparent)" }} />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {tickerItems.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 py-5 rounded-xl shrink-0"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  opacity: 0.55,
                  minWidth: 200,
                }}
              >
                {partner.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { name: "Microsoft", color: "#F25022", subtitle: "Azure, Copilot & Microsoft Security" },
          { name: "Amazon Web Services", color: "#FF9900", subtitle: "AWS Security, GuardDuty & WAF" },
          { name: "Google Cloud", color: "#4285F4", subtitle: "Chronicle, Security Command Center" },
        ].map((p) => (
          <div
            key={p.name}
            className="p-6 rounded-2xl text-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
            </div>
            <h3 className="text-[#F0F4F8] font-semibold mb-2 text-sm">{p.name}</h3>
            <p className="text-[#8896AB] text-xs leading-relaxed">{p.subtitle}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
