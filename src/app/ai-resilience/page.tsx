"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function AIResiliencePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ paddingTop: "180px", paddingBottom: "160px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(244,121,32,0.08) 0%, rgba(43,126,193,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-6">
              AI Resilience
            </p>
            <h1
              className="text-[#F0F4F8] mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              AI Resilience
            </h1>
            <p className="text-[#8896AB] mb-10 leading-relaxed max-w-lg" style={{ fontSize: "18px" }}>
              Building trust in AI-native security operations. Ensuring your AI systems are secure, ethical, and accountable by design.
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

      <Footer />
    </motion.main>
  );
}
