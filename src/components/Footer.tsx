"use client";

import Link from "next/link";
import Image from "next/image";

const links = {
  Company: [
    { href: "/about", label: "Who We Are" },
    { href: "/careers", label: "Careers" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact Us" },
  ],
  Services: [
    { href: "/services#cyber", label: "Cyber Transformation" },
    { href: "/services#ai", label: "AI Enablement" },
    { href: "/services#cloud", label: "Cloud Transformation" },
    { href: "/services#quantum", label: "Quantum Readiness" },
    { href: "/ai-resilience", label: "AI Resilience" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8 px-6 md:px-20"
      style={{ background: "#060810", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="CyberAIQ AG"
                width={150}
                height={24}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-[#8896AB] text-sm leading-relaxed max-w-xs mb-2">
              Converging trust in the Age of AI, Cloud, Cyber &amp; Quantum.
            </p>
            <p className="text-[#8896AB] text-sm leading-relaxed max-w-xs">
              Hyperscaler-first. Automation-led. Built for what&apos;s next.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/cyberaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8896AB] hover:border-[#F47920] hover:text-[#F47920] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 space-y-1">
              <a
                href="mailto:contact@cyberaiq.com"
                className="flex items-center gap-2 text-[#8896AB] text-sm hover:text-[#F47920] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                contact@cyberaiq.com
              </a>
              <a
                href="tel:+97148378349"
                className="flex items-center gap-2 text-[#8896AB] text-sm hover:text-[#F47920] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M4 2h4l2 5-2.5 1.5A11 11 0 0011.5 12.5L13 10l5 2v4c0 1-1 2-2 2C7 18 2 11 2 4c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                +971 4 837 8349
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[#F0F4F8] font-semibold text-sm mb-5">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#8896AB] text-sm hover:text-[#F47920] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[#8896AB] text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} CYBERAIQ AG. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Terms & Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#8896AB] text-xs hover:text-[#F0F4F8] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
