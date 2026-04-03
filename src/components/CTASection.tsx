"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }}>
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(244,121,32,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-6">
            Ready to Transform?
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8] mb-6">
            Transformation starts with clarity
          </h2>
          <p className="text-[#8896AB] max-w-[520px] mx-auto mb-10 leading-relaxed" style={{ fontSize: "18px" }}>
            Whether you&apos;re modernizing your security posture, migrating to cloud, or preparing
            for quantum threats — our experts are ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:-translate-y-0.5 hover:bg-[#e06810]"
            style={{ fontSize: "16px" }}
          >
            Start a Strategic Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
