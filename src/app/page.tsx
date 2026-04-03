"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import RealitySection from "@/components/RealitySection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
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
      <ServicesSection />
      <DifferentiatorSection />
      <WhoWeAreSection />
      <StatsSection />
      <PartnersSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </motion.main>
  );
}
