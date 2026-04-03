"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <ServicesSection />
      <StatsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </motion.main>
  );
}
