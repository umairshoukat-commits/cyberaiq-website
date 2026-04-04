"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/variants";

const posts = [
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    description:
      "Microsoft is expanding Microsoft 365 with additional Ai, Security & Intune features. Read about the changes & what the\u2026",
    tag: "Microsoft 365",
    color: "#2B7EC1",
  },
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    description:
      "Microsoft is expanding Microsoft 365 with additional Ai, Security & Intune features. Read about the changes & what the\u2026",
    tag: "AI Security",
    color: "#F47920",
  },
  {
    title: "Update: More value in the Microsoft 365 Bandies",
    description:
      "Microsoft is expanding Microsoft 365 with additional Ai, Security & Intune features. Read about the changes & what the\u2026",
    tag: "Cloud",
    color: "#2B7EC1",
  },
];

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-secondary mb-4">
            Insights
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
            Knowledge and Cases that inspire
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group p-7 rounded-2xl bg-surface-1 border border-[var(--color-border)] transition-all duration-300 cursor-pointer"
            >
              <div className="mb-5">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                  style={{ background: `${post.color}12`, color: post.color }}
                >
                  {post.tag}
                </span>
              </div>
              <h3 className="text-text-0 font-semibold text-base mb-3 leading-snug group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-text-2 text-sm leading-relaxed mb-6">
                {post.description}
              </p>
              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: post.color }}
              >
                <span>Read more</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-4 items-center"
        >
          <Link
            href="#"
            className="text-[13px] font-semibold text-accent hover:text-accent-dim transition-colors duration-200"
          >
            View all blogs
          </Link>
          <span className="text-text-3/30">|</span>
          <Link
            href="#"
            className="text-[13px] font-semibold text-secondary hover:text-secondary/80 transition-colors duration-200"
          >
            View all cases
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
