"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#0F0F0F] text-white py-14 md:py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* MASCOT — shown first on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center md:hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Mascot 2.png"
              alt="mascot"
              width={220}
              height={220}
              priority
              className="w-[180px] sm:w-[220px] h-auto"
            />
          </motion.div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >

          {/* HEADING */}
          <h2
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Magic
            </span>{" "}
            Through{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

          {/* PARAGRAPHS */}
          <p
            className="text-gray-300 mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            At IMAGIC, we bring imagination to life through creativity and technology. As a
            leading video production, photography, and design agency, we create captivating corporate videos,
            live productions, social media content, and digital experiences that connect with your audience.
          </p>
          <p
            className="text-gray-300 mt-3 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our team of passionate creators blends artistic vision with technical precision to deliver work that stands out.
            From producing and designing to full-service digital storytelling, we turn ideas into unforgettable experiences.
          </p>

          {/* BUTTON */}
          <div className="mt-7 md:mt-8">
            <a
              href="/about"
              className="inline-block px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base text-white backdrop-blur-md bg-[#8A2BE2]/50 border border-white/20 hover:bg-[#8A2BE2] transition"
            >
              Learn More About Us
            </a>
          </div>

        </motion.div>

        {/* RIGHT CONTENT (MASCOT) — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 justify-end hidden md:flex"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Mascot 2.png"
              alt="mascot"
              width={400}
              height={400}
              priority
              className="w-[320px] lg:w-[400px] h-auto"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}