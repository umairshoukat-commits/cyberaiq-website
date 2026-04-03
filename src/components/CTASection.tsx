"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(244,121,32,0.08) 0%, rgba(43,126,193,0.05) 50%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,244,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,244,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F47920] mb-6 block">
            Ready to Transform?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F4F8] leading-tight tracking-[-0.02em] mb-6">
            Transformation starts
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F47920, #2B7EC1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with clarity
            </span>
          </h2>
          <p className="text-[#8896AB] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re modernizing your security posture, migrating to cloud, or preparing
            for quantum threats — our experts are ready to help you build a resilient, intelligent future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F47920] text-white font-semibold text-base hover:bg-[#e06810] transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Start a Strategic Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#F0F4F8] font-semibold text-base hover:bg-white/5 transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Who We Are
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
