"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/* Aurora CSS keyframes */
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

/* Word-by-word animation */
function AnimatedWords({ text, className, style, delay = 0 }: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
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
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <AuroraCSS />

      {/* Aurora blobs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[5%] right-[0%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[100px]"
          style={{
            background: "#F47920",
            opacity: 0.14,
            animation: "aurora-drift-1 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[5%] -left-[5%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full blur-[110px]"
          style={{
            background: "#2B7EC1",
            opacity: 0.16,
            animation: "aurora-drift-2 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[20%] left-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[90px]"
          style={{
            background: "linear-gradient(135deg, #F47920, #2B7EC1)",
            opacity: 0.08,
            animation: "aurora-drift-3 15s ease-in-out infinite",
          }}
        />
      </div>

      {/* 3D canvas */}
      <div className="hidden md:block absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Vignette for legibility */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 48%, rgba(8,11,16,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 md:px-20 max-w-[1280px] mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8896AB] mb-8"
        >
          Trusted by Governments and Enterprises
        </motion.p>

        {/* Headline — word-by-word reveal */}
        <h1 className="mb-8" style={{ fontSize: "clamp(48px, 6vw, 96px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
          <AnimatedWords
            text="Converging trust"
            className="block text-[#F0F4F8]"
            delay={0.2}
          />
          <span className="block">
            <AnimatedWords
              text="in the age of"
              className="text-[#F0F4F8]"
              delay={0.4}
            />
            {" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              style={{
                background: "linear-gradient(135deg, #F47920 20%, #E8623A 50%, #2B7EC1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI.
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="text-[#8896AB] max-w-[480px] mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "18px" }}
        >
          We help organizations converge AI, Cloud, Cyber and Quantum into a single strategic advantage — securely and by design.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:-translate-y-0.5 hover:bg-[#e06810]"
            style={{ fontSize: "16px" }}
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
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#8896AB]/40 uppercase font-medium">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#8896AB]/20 to-transparent"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ background: "rgba(255,255,255,0.06)" }} />
    </section>
  );
}
