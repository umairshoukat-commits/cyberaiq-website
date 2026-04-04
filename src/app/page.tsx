"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import RealitySection from "@/components/RealitySection";
import PillarsSection from "@/components/PillarsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import HyperscalerTicker from "@/components/HyperscalerTicker";
import StatsSection from "@/components/StatsSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
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
      <RealitySection />
      <PillarsSection />
      <DifferentiatorSection />
      <HyperscalerTicker />
      <StatsSection />
      <WhoWeAreSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </motion.main>
  );
}
