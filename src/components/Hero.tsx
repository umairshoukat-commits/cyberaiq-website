"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const pillars = ["AI", "Cloud", "Cyber", "Quantum"];

/* Aurora CSS keyframes injected once */
function AuroraCSS() {
  return (
    <style>{`
      @keyframes aurora-drift-1 {
        0%   { transform: translate(0%, 0%) scale(1); }
        25%  { transform: translate(15%, -20%) scale(1.15); }
        50%  { transform: translate(-10%, 15%) scale(0.9); }
        75%  { transform: translate(20%, -10%) scale(1.1); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
      @keyframes aurora-drift-2 {
        0%   { transform: translate(0%, 0%) scale(1); }
        25%  { transform: translate(-20%, 15%) scale(1.1); }
        50%  { transform: translate(15%, -15%) scale(0.85); }
        75%  { transform: translate(-10%, 10%) scale(1.15); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
      @keyframes aurora-drift-3 {
        0%   { transform: translate(0%, 0%) scale(1); }
        33%  { transform: translate(10%, -25%) scale(1.2); }
        66%  { transform: translate(-15%, 10%) scale(0.95); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
    `}</style>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    gsap.to(content, {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "30% top",
        scrub: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AuroraCSS />

      {/* === LAYER 0: Aurora animated blobs (inspired by 21st.dev AuroraHero) === */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Orange blob — top-right drift */}
        <div
          className="absolute -top-[5%] right-[0%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[100px]"
          style={{
            background: "#F47920",
            opacity: 0.18,
            animation: "aurora-drift-1 18s ease-in-out infinite",
          }}
        />
        {/* Blue blob — bottom-left drift */}
        <div
          className="absolute -bottom-[5%] -left-[5%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full blur-[110px]"
          style={{
            background: "#2B7EC1",
            opacity: 0.20,
            animation: "aurora-drift-2 22s ease-in-out infinite",
          }}
        />
        {/* Mixed accent blob — center-right */}
        <div
          className="absolute top-[20%] left-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[90px]"
          style={{
            background: "linear-gradient(135deg, #F47920, #2B7EC1)",
            opacity: 0.10,
            animation: "aurora-drift-3 15s ease-in-out infinite",
          }}
        />
      </div>

      {/* === LAYER 0: 3D Network Graph (desktop only) === */}
      <div className="hidden md:block absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* === LAYER 2: Soft vignette for text legibility over aurora + 3D === */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 48%, rgba(10,13,18,0.35) 0%, transparent 60%)",
        }}
      />

      {/* === LAYER 2: Noise texture === */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* === LAYER 10: Content — always above canvas === */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-8"
        >
          {pillars.map((p) => {
            const isOrange = p === "AI" || p === "Cyber";
            return (
              <span
                key={p}
                className="px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase rounded-full border backdrop-blur-sm"
                style={{
                  borderColor: isOrange
                    ? "rgba(244,121,32,0.35)"
                    : "rgba(43,126,193,0.35)",
                  color: isOrange ? "#F47920" : "#2B7EC1",
                  background: isOrange
                    ? "rgba(244,121,32,0.06)"
                    : "rgba(43,126,193,0.06)",
                }}
              >
                {p}
              </span>
            );
          })}
        </motion.div>

        {/* Headline — Linear-inspired: font-black, tight tracking, text-wrap: balance */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-[-0.03em] leading-[1.02] text-[#F0F4F8] mb-7"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Converging trust in
          <br className="hidden lg:block" />
          {" the "}
          <span
            style={{
              background: "linear-gradient(135deg, #F47920 20%, #E8623A 45%, #2B7EC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Age of AI, Cloud,
            <br className="hidden sm:block" />
            {" "}Cyber &amp; Quantum
          </span>
        </motion.h1>

        {/* Tagline — two-tier: bold lead + softer expansion (Wiz pattern) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base sm:text-lg md:text-xl text-[#C5CDD8] max-w-2xl mx-auto mb-3 leading-relaxed font-medium"
        >
          Hyperscaler-first by design. Automation-led by conviction.
          Built for what&apos;s next.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base text-[#8896AB] max-w-lg mx-auto mb-12 leading-relaxed"
        >
          We help organizations build and scale trust in a world powered
          by cloud, data, automation, and intelligence — securely,
          responsibly, and by design.
        </motion.p>

        {/* CTAs — Wiz-style prominent primary + proper ghost button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F47920] text-white font-semibold text-[15px] transition-all duration-300 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:-translate-y-0.5 hover:bg-[#e06810]"
          >
            Start a Strategic Conversation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#F0F4F8] font-semibold text-[15px] transition-all duration-300 hover:-translate-y-0.5 border border-white/20 hover:border-white/50 hover:bg-white/[0.04] backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-24 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#8896AB]/50 uppercase font-medium">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[#8896AB]/30 to-transparent"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
