"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { gsap, SplitText } from "@/lib/gsap";
import { fadeUp } from "@/lib/variants";

const areaOptions = ["AI", "Cloud", "Cyber", "Marketplace", "Quantum"];

export default function ContactPage() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!h1Ref.current) return;
    const split = SplitText.create(h1Ref.current, { type: "words", mask: "words" });
    gsap.from(split.words, {
      y: "100%",
      duration: 1.2,
      stagger: 0.04,
      ease: "expo.out",
    });
    return () => split.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-text-0 text-sm outline-none transition-all duration-200 placeholder:text-text-3";
  const inputStyle = {
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "180px", paddingBottom: "60px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 60% 30%, rgba(244,121,32,0.06) 0%, rgba(43,126,193,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-accent mb-6">
              Contact Us
            </p>
            <h1
              ref={h1Ref}
              className="text-text-0 mb-6"
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Start the Conversation
            </h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-text-2 leading-relaxed"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Transformation starts with clarity. Our team is here to help you navigate
              what&apos;s next.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="relative" style={{ paddingTop: "40px", paddingBottom: "160px" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl text-center"
                style={{
                  background: "rgba(244,121,32,0.05)",
                  border: "1px solid rgba(244,121,32,0.2)",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l4 4L19 7"
                      stroke="#F47920"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-text-0 tracking-tight mb-3">
                  Message Received
                </h2>
                <p className="text-text-2">
                  Thank you for reaching out. Our team will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl space-y-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-text-2 text-sm mb-2 font-medium"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(244,121,32,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.06)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-text-2 text-sm mb-2 font-medium"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(244,121,32,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.06)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-text-2 text-sm mb-2 font-medium"
                      htmlFor="organization"
                    >
                      Organization *
                    </label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="Acme Corporation"
                      required
                      value={formState.organization}
                      onChange={(e) =>
                        setFormState({ ...formState, organization: e.target.value })
                      }
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(244,121,32,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.06)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-text-2 text-sm mb-2 font-medium"
                      htmlFor="role"
                    >
                      Role
                    </label>
                    <input
                      id="role"
                      type="text"
                      placeholder="CISO, CTO, etc."
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(244,121,32,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.06)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-2 text-sm mb-3 font-medium">
                    Area of Interest *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {areaOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormState({ ...formState, area: opt })}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                        style={{
                          background:
                            formState.area === opt ? "#F47920" : "rgba(255,255,255,0.04)",
                          color: formState.area === opt ? "white" : "#8896AB",
                          border: `1px solid ${formState.area === opt ? "#F47920" : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-text-2 text-sm mb-2 font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your challenges and what you're looking to achieve..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(244,121,32,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.06)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-dim transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                  style={{ fontSize: "16px" }}
                >
                  Let&apos;s Build the Future of Trust!
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-5"
          >
            {[
              {
                label: "Email",
                value: "contact@cyberaiq.com",
                href: "mailto:contact@cyberaiq.com",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2"
                      y="4"
                      width="16"
                      height="12"
                      rx="2"
                      stroke="#F47920"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M2 7l8 5 8-5"
                      stroke="#F47920"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: "+971 4 837 8349",
                href: "tel:+97148378349",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 2h4l2 5-2.5 1.5A11 11 0 0011.5 12.5L13 10l5 2v4c0 1-1 2-2 2C7 18 2 11 2 4c0-1 1-2 2-2z"
                      stroke="#F47920"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(244,121,32,0.25)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.06)")
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(244,121,32,0.1)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-text-2 text-xs font-medium mb-1">{item.label}</p>
                  <p className="text-text-0 font-semibold group-hover:text-accent transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(43,126,193,0.04)",
                border: "1px solid rgba(43,126,193,0.12)",
              }}
            >
              <h3 className="text-text-0 font-semibold mb-5 text-sm">Why talk to us?</h3>
              {[
                "Architecture-first, outcomes-driven approach",
                "No hardware. No legacy models.",
                "Hyperscaler-aligned by default",
                "NDA available upon request",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-text-2 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
