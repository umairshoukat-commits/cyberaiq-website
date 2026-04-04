"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const bullets = [
  "Built one of the top cybersecurity services and solution provider globally",
  "Led some of the largest and most complex cloud and cybersecurity transformations across Governments and Enterprises in the ME",
  "Earned the highest hyperscaler credentials and global recognition",
];

export default function WhoWeAreSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "160px 0", background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] mb-4">
                Who We Are
              </p>
              <h2
                className="text-[#F0F4F8] mb-6"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
              >
                Founded by practitioners, not operators
              </h2>
              <p className="text-[#8896AB] leading-[1.7] mb-8" style={{ fontSize: "16px" }}>
                CYBERAIQ AG is founded by serial entrepreneurs and hyperscaler leaders who have:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-5 mb-8"
            >
              {bullets.map((bullet) => (
                <motion.div
                  key={bullet}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F47920] mt-2 flex-shrink-0" />
                  <p className="text-[#8896AB] leading-[1.7]" style={{ fontSize: "16px" }}>
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[#C5CDD8] leading-[1.7]"
              style={{ fontSize: "16px" }}
            >
              We bring together deep cyber expertise, AI-first thinking, and hyperscaler-native execution to create secure, compliant, and measurable outcomes at scale.
            </motion.p>
          </div>

          {/* Right -- philosophy card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="p-10 rounded-2xl bg-[#0A0D12] border border-[var(--color-border)] relative overflow-hidden"
              style={{ minHeight: "380px" }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-[20%] right-[10%] w-40 h-40 rounded-full blur-[50px]"
                  style={{ background: "var(--color-secondary)", opacity: 0.06 }}
                />
                <div
                  className="absolute bottom-[20%] left-[15%] w-48 h-48 rounded-full blur-[60px]"
                  style={{ background: "var(--color-accent)", opacity: 0.05 }}
                />
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full" style={{ minHeight: "300px" }}>
                <p className="text-[#C5CDD8]/60 text-sm italic leading-relaxed border-l-2 border-accent/40 pl-4 mb-8">
                  &ldquo;Security is no longer a function. It is a cloud, data, automation and intelligence problem.&rdquo;
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "12+", label: "Years of Excellence" },
                    { value: "300+", label: "Solutions Delivered" },
                    { value: "80+", label: "AI & Cyber Experts" },
                    { value: "3", label: "Hyperscaler Partners" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4">
                      <p className="text-2xl font-black text-[#F0F4F8] mb-1">{stat.value}</p>
                      <p className="text-[#5A6678] text-xs uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
