"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // duration of splash

    return () => clearTimeout(timer);
  }, []);

  return (
   <>
      {/* <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>*/}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <FeaturedProjects />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
}