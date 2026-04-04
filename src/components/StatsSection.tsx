"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/variants";

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
      <span className="text-2xl lg:text-3xl font-black text-accent ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: "160px 0", background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
            By The Numbers
          </p>
          <h2
            className="text-text-0"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textWrap: "balance",
            }}
          >
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
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-text-0 mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-text-3 text-xs font-medium tracking-wider uppercase leading-snug px-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
