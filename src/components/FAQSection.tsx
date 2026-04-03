"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Are you an MSSP?",
    answer: "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Do you replace internal teams?",
    answer: "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Do you sell hardware or a proprietary platform?",
    answer: "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Who do you typically work with?",
    answer: "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "How long are engagements?",
    answer: "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
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

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b transition-colors duration-200"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[#F0F4F8] font-semibold pr-8" style={{ fontSize: "16px" }}>
          {faq.question}
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="flex-shrink-0"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="#F47920"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#8896AB] pb-6 leading-relaxed" style={{ fontSize: "15px" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "160px 0", background: "rgba(255,255,255,0.008)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F47920] mb-4">
              FAQ
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="text-[#F0F4F8] mb-6">
              Common questions
            </h2>
            <p className="text-[#8896AB] leading-relaxed" style={{ fontSize: "16px" }}>
              We get asked these often. If your question isn&apos;t here, reach out directly.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
