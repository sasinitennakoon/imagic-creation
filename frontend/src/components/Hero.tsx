"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: '100svh' }}
    >

      {/* 🎥 BACKGROUND VIDEO — full screen on both mobile & desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY — desktop only */}
      <div className="absolute inset-0 bg-black/70 hidden md:block" />

      {/* MOBILE GRADIENT — subtle bottom-up gradient so text stays readable over video */}
      <div className="absolute inset-0 bg-black/60 md:hidden" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 md:px-16 w-full">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Where{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                IMAGINATION
              </span>
              <br />
              Meets{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                CREATION
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mt-4 md:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We are a full-service creative agency that brings brands to life
              through video, design and digital experiences.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-7 md:mt-12 w-full sm:w-auto items-stretch sm:items-start"
            >
              <a
                href="/projects"
                className="px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-sm md:text-base text-white backdrop-blur-md bg-[#8A2BE2]/50 border border-white/20 hover:bg-[#8A2BE2] transition w-full sm:w-auto text-center"
              >
                Explore Our Works
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-sm md:text-base bg-white/10 text-white hover:scale-105 transition w-full sm:w-auto text-center"
              >
                Contact Us
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}