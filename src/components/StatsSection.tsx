"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

// Labels from cyberaiq.com — values are placeholder targets
const stats = [
  { value: 12, suffix: "+", label: "Years of Service Excellence" },
  { value: 300, suffix: "+", label: "Secure Digital Solutions Delivered" },
  { value: 99.9, suffix: "%", label: "System Reliability & Uptime" },
  { value: 80, suffix: "+", label: "AI, Cyber & Cloud Experts" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const isFloat = target % 1 !== 0;
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * target;

      if (isFloat) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (inView) animate();
  }, [inView, animate]);

  return (
    <span className="tabular-nums">
      {display}
      <span className="text-3xl lg:text-4xl font-black text-[#F47920] ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(43,126,193,0.06) 0%, rgba(244,121,32,0.04) 50%, transparent 80%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,244,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,244,248,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#2B7EC1] mb-4 block">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0F4F8] tracking-[-0.02em]">
            Proven at scale
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-black text-[#F0F4F8] mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-[#8896AB] text-sm font-medium tracking-wide uppercase leading-snug px-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[#8896AB] text-sm">
            Trusted by enterprises across Europe, the Middle East, and North America
          </p>
        </motion.div>
      </div>
    </section>
  );
}
