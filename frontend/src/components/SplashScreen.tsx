"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#121212] flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#8A2BE2]/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />

      <div className="relative flex flex-col items-center justify-center px-6">
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/imagic logo.png"
            alt="Imagic Creation Logo"
            width={320}
            height={120}
            priority
            className="select-none"
          />
        </motion.div>

        {/* SLOGAN */}
        <motion.p
          className="text-gray-400 mt-5 text-sm md:text-base tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            ease: "easeOut",
          }}
        >
          We Are Your Solution
        </motion.p>
      </div>
    </motion.div>
  );
}