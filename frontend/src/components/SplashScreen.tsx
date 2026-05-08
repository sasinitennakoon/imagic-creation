"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const glitters = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  delay: Math.random() * 4,
  duration: Math.random() * 2 + 1.5,
}));

export default function SplashScreen() {
  return (
    <div className="h-screen w-full bg-[#121212] text-white flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#8A2BE2]/30 blur-[150px] rounded-full top-[-100px] left-[-100px]" />

      {/* MAIN CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-6">

        {/* LOGO - appears first */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            >
            <Image
                src="/imagic logo.png"
                alt="logo"
                width={320}
                height={120}
                priority
                className="mb-6"
            />
            </motion.div>

        {/* SLOGAN - appears second */}
        <motion.p
          className="text-gray-400 mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }} 
        >
          " We Are Your Solution "
        </motion.p>

        {/* MASCOT - appears third */}
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.7 }} 
            className="hidden md:block absolute right-6"
            >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Image
                src="/mascot.png"
                alt="mascot"
                width={350}
                height={350}
                priority
                />
            </motion.div>
            </motion.div>

      </div>

      {/* MID-LEVEL LOADING BAR - replaced the long one */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64">
        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#8A2BE2] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>

    </div>
  );
}