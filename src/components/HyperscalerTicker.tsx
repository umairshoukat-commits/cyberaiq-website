"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";

const partners = [
  {
    name: "Microsoft",
    logo: (
      <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="2" width="12" height="12" fill="#F25022" />
        <rect x="13.5" y="2" width="12" height="12" fill="#7FBA00" />
        <rect x="0" y="15.5" width="12" height="12" fill="#00A4EF" />
        <rect x="13.5" y="15.5" width="12" height="12" fill="#FFB900" />
        <text x="32" y="19" fill="rgba(240,244,248,0.9)" fontSize="14" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">Microsoft</text>
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
        <text x="26" y="19" fill="rgba(240,244,248,0.9)" fontSize="14" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="500">Google Cloud</text>
      </svg>
    ),
  },
];

// 6 copies for seamless loop
const tickerItems = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function HyperscalerTicker() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }} id="partners">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
            Hyperscaler Partners
          </p>
          <h2
            className="text-text-0 mb-5"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textWrap: "balance",
            }}
          >
            Hyperscaler&apos;s at the core
          </h2>
          <p className="text-text-2 max-w-xl mx-auto leading-[1.7]" style={{ fontSize: "16px" }}>
            CYBERAIQ AG is built natively on the world&apos;s leading hyperscalers, forming the
            foundation of our architecture, automation, and scale.
          </p>
        </motion.div>
      </div>

      {/* Ticker with CSS animation */}
      <div className="relative mb-16">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--color-surface-0), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, var(--color-surface-0), transparent)" }}
        />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-16 items-center shrink-0"
            style={{
              animation: "ticker 25s linear infinite",
            }}
          >
            {tickerItems.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 py-5 rounded-xl shrink-0 bg-surface-1 border border-[var(--color-border)]"
                style={{ opacity: 0.55, minWidth: 200 }}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { name: "Microsoft", color: "#F25022" },
          { name: "Amazon Web Services", color: "#FF9900" },
          { name: "Google Cloud", color: "#4285F4" },
        ].map((p) => (
          <div
            key={p.name}
            className="p-6 rounded-2xl bg-surface-1 border border-[var(--color-border)] text-center"
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
            </div>
            <h3 className="text-text-0 font-semibold text-sm">{p.name}</h3>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
