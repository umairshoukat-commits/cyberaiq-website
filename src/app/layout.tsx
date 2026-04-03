"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    if (lenis) lenis.on("scroll", ScrollTrigger.update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Navbar />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <CustomCursor />
    </ReactLenis>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>CyberAIQ AG — AI, Cloud, Cyber &amp; Quantum Security</title>
        <meta name="description" content="CyberAIQ AG converges AI, Cloud, Cyber and Quantum security for the modern enterprise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full bg-[#0A0D12]" suppressHydrationWarning>
        <RootLayoutInner>{children}</RootLayoutInner>
      </body>
    </html>
  );
}
