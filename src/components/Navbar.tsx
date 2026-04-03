"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                background: "rgba(10,13,18,0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo — transparent background, no wrapper bg */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CyberAIQ AG"
              width={160}
              height={25}
              priority
              className="h-8 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8896AB] hover:text-white font-medium"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-[#F47920] transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                  {/* Hover underline */}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 h-px bg-white/30 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#F47920] text-white text-sm font-semibold hover:bg-[#e06810] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/0 hover:shadow-orange-500/25"
            >
              Get Started
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#F0F4F8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#F0F4F8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#F0F4F8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{ background: "rgba(10,13,18,0.97)", backdropFilter: "blur(20px)" }}
            >
              <div className="flex flex-col px-6 py-6 gap-5 border-t border-white/5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-base font-medium ${
                        pathname === link.href ? "text-white" : "text-[#8896AB]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#F47920] text-white text-sm font-semibold mt-2"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
