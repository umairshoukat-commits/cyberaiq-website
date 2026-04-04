"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnnouncementBar from "@/components/AnnouncementBar";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>CyberAIQ AG — AI, Cloud, Cyber &amp; Quantum Convergence</title>
        <meta
          name="description"
          content="CyberAIQ AG converges AI, Cloud, Cyber and Quantum into a single strategic advantage for the modern enterprise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <SmoothScrollProvider>
          <AnnouncementBar />
          <Navbar />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
