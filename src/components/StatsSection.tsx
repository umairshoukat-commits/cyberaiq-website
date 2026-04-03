"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

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
      <span className="text-2xl lg:text-3xl font-black text-[#F47920] ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
            By The Numbers
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8]">
            Proven at scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
              }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-[#F0F4F8] mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-[#8896AB] text-xs font-medium tracking-wider uppercase leading-snug px-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[#8896AB] text-sm">
            Trusted by enterprises across Europe, the Middle East, and North America
          </p>
        </motion.div>
      </div>
    </section>
  );
}
