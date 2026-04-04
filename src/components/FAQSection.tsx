"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/variants";

const faqs = [
  {
    question: "Are you an MSSP?",
    answer:
      "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Do you replace internal teams?",
    answer:
      "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Do you sell hardware or a proprietary platform?",
    answer:
      "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
  {
    question: "How long are engagements?",
    answer:
      "No. We do not provide managed services or SOC Operations. We are an architecture-first, outcomes-driven partner.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "160px 0", background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-accent mb-4">
              FAQ
            </p>
            <h2
              className="text-text-0 mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              Common questions
            </h2>
            <p className="text-text-2 leading-[1.7]" style={{ fontSize: "16px" }}>
              We get asked these often. If your question isn&apos;t here, reach out directly.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b transition-colors duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-text-0 font-semibold pr-8" style={{ fontSize: "16px" }}>
                      {faq.question}
                    </span>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="flex-shrink-0"
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-text-2 pb-6 leading-[1.7]"
                          style={{ fontSize: "15px" }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
