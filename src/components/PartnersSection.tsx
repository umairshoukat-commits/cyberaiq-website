"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Real logos — text-based SVG for 100% reliable cross-browser rendering
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
        <path d="M3 30 Q19 36 40 32" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M37 30.5 l4.5 2 l-1.5 3.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    logo: (
      <svg width="162" height="28" viewBox="0 0 162 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified Google G */}
        <path d="M13.6 4.8L15.4 3C13.5 1.3 11.2.5 8.8.5 4.7.5 1.1 3.2-.4 7l2 1.5C2.8 5.4 5.5 3.3 8.8 3.3c1.7 0 3.3.6 4.6 1.5z" fill="#EA4335" transform="translate(0,2)" />
        <path d="M17.7 7.2C16.8 5.1 15.3 3.4 13.4 5.1L11.6 6.8c.8.8 1.4 1.9 1.4 3.1v.4c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3H9.2l-.4.4v2.6l.4.4h3.7c3.5 0 6.5-2.3 7.4-5.6.9-3.3-.6-6.8-2.6-8.8z" fill="#4285F4" transform="translate(0,2)" />
        <path d="M4.8 22.4H9V18.6H4.8c-.4 0-.7-.1-1-.2L1.7 20c.8 1.6 2.4 2.4 3.1 2.4z" fill="#34A853" transform="translate(0,2)" />
        <path d="M4.8 4.5C2 4.5 0 6.8 0 9.5s2 5 4.8 5c.9 0 1.7-.3 2.4-.7L9.2 12c-.7.5-1.5.8-2.4.8-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c.9 0 1.7.3 2.3.9L10.9 4.2C9.7 3.2 7.5 4.5 4.8 4.5z" fill="#FBBC05" transform="translate(0,2)" />
        <text x="26" y="19" fill="rgba(240,244,248,0.9)" fontSize="14" fontFamily="'Google Sans',system-ui,-apple-system,sans-serif" fontWeight="500">Google Cloud</text>
      </svg>
    ),
  },
];

// 6 copies for seamless -50% loop animation
const tickerItems = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} id="partners">
      <div className="max-w-7xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">
            Hyperscaler Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em] mb-5">
            Built on world-class infrastructure
          </h2>
          <p className="text-[#8896AB] max-w-xl mx-auto leading-relaxed">
            CYBERAIQ AG is built natively on the world&apos;s leading hyperscalers, forming the
            foundation of our architecture, automation, and scale.
          </p>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #0A0D12, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #0A0D12, transparent)" }} />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {tickerItems.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 py-5 rounded-xl shrink-0 transition-all duration-300 hover:opacity-100"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  opacity: 0.55,
                  minWidth: 200,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "1";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.55";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {partner.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partner cards — real description from cyberaiq.com */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { name: "Microsoft", color: "#F25022", subtitle: "Azure, Copilot & Microsoft Security" },
          { name: "Amazon Web Services", color: "#FF9900", subtitle: "AWS Security, GuardDuty & WAF" },
          { name: "Google Cloud", color: "#4285F4", subtitle: "Chronicle, Security Command Center" },
        ].map((p) => (
          <div
            key={p.name}
            className="p-6 rounded-2xl text-center transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${p.color}18`, border: `1px solid ${p.color}40` }}
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
