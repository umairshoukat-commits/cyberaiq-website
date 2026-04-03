"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    subtitle: "Microsoft is expanding Microsoft 365 with additional AI, Security & Intune features.",
    tag: "Microsoft 365",
    color: "#2B7EC1",
  },
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    subtitle: "Microsoft is expanding Microsoft 365 with additional AI, Security & Intune features.",
    tag: "AI Security",
    color: "#F47920",
  },
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    subtitle: "Microsoft is expanding Microsoft 365 with additional AI, Security & Intune features.",
    tag: "Cloud",
    color: "#2B7EC1",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2B7EC1] mb-4">
              Insights
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8]">
              Knowledge and cases that inspire
            </h2>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-[13px] font-semibold text-[#F47920] hover:text-[#ff8c3a] transition-colors duration-200"
            >
              View all blogs
            </Link>
            <span className="text-[#8896AB]/30">|</span>
            <Link
              href="#"
              className="text-[13px] font-semibold text-[#2B7EC1] hover:text-[#4a9ad8] transition-colors duration-200"
            >
              View all cases
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group p-7 rounded-2xl transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="mb-5">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                  style={{ background: `${post.color}12`, color: post.color }}
                >
                  {post.tag}
                </span>
              </div>
              <h3 className="text-[#F0F4F8] font-semibold text-base mb-3 leading-snug group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-[#8896AB] text-sm leading-relaxed mb-6">
                {post.subtitle}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: post.color }}>
                <span>Read more</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
