"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  /* ---- GSAP SplitText + staggered entrance ---- */
  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const h1 = h1Ref.current;
    const subtext = subtextRef.current;
    const eyebrow = eyebrowRef.current;
    const ctaWrap = ctaWrapRef.current;
    const scroll = scrollRef.current;
    if (!hero || !content || !h1 || !subtext || !eyebrow || !ctaWrap || !scroll) return;

    // Split headline into words
    const split = SplitText.create(h1, {
      type: "words",
    });
    splitRef.current = split;

    // Set initial states
    gsap.set(split.words, { y: "100%", opacity: 0 });
    gsap.set(eyebrow, { opacity: 0, y: 16 });
    gsap.set(subtext, { opacity: 0, y: 20 });
    gsap.set(ctaWrap, { opacity: 0, y: 24 });
    gsap.set(scroll, { opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // Eyebrow fade in
    tl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // H1 words stagger in
    tl.to(
      split.words,
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        stagger: 0.04,
        ease: "expo.out",
      },
      "-=0.3"
    );

    // Subtext after headline
    tl.to(
      subtext,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // CTA button
    tl.to(
      ctaWrap,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Scroll indicator
    tl.to(
      scroll,
      {
        opacity: 1,
        duration: 0.8,
      },
      "-=0.2"
    );

    // ScrollTrigger: fade out content on scroll
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

    return () => {
      tl.kill();
      if (splitRef.current) splitRef.current.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  /* ---- Magnetic CTA effect ---- */
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    xTo.current = gsap.quickTo(btn, "x", {
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
    yTo.current = gsap.quickTo(btn, "y", {
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const btn = ctaRef.current;
      if (!btn || !xTo.current || !yTo.current) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.15;
      const dy = (e.clientY - cy) * 0.15;
      const maxOffset = 8;
      xTo.current(Math.max(-maxOffset, Math.min(maxOffset, dx)));
      yTo.current(Math.max(-maxOffset, Math.min(maxOffset, dy)));
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (xTo.current) xTo.current(0);
    if (yTo.current) yTo.current(0);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Aurora blobs */}
      <AuroraBackground />

      {/* 3D canvas — desktop only */}
      <div className="hidden md:block absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Vignette overlay for text legibility */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 48%, rgba(7,9,13,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 md:px-20 max-w-[1280px] mx-auto"
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="text-[11px] tracking-[0.15em] uppercase font-semibold mb-8"
          style={{ color: "var(--color-text-2)" }}
        >
          Trusted by Governments and Enterprises
        </p>

        {/* Headline — GSAP SplitText reveal */}
        <h1
          ref={h1Ref}
          className="mb-8"
          style={{
            fontSize: "clamp(40px, 5.5vw, 88px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--color-text-0)",
            textWrap: "balance",
            overflow: "hidden",
          }}
        >
          Converging trust in the Age of AI, Cloud, Cyber &amp; Quantum
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="max-w-[520px] mx-auto mb-12 leading-relaxed"
          style={{
            fontSize: "18px",
            color: "var(--color-text-1)",
          }}
        >
          Hyperscaler-first by design. Automation-led by conviction. Built for
          what&apos;s next.
        </p>

        {/* Single CTA with magnetic effect */}
        <div ref={ctaWrapRef}>
          <Link
            ref={ctaRef}
            href="/contact"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#F47920] text-white font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(244,121,32,0.25)] hover:shadow-[0_12px_40px_rgba(244,121,32,0.4)] hover:-translate-y-0.5 hover:bg-[#e06810] px-10 py-4 w-full sm:w-auto justify-center"
            style={{ fontSize: "15px", display: "inline-flex" }}
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
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="mt-20 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(136,150,171,0.4)" }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#8896AB]/20 to-transparent"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: "var(--color-border)" }}
      />
    </section>
  );
}
