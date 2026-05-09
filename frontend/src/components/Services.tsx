"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const services = [
  {
    title: "Photography",
    desc: "Stunning imagery for products, events, and brands that captures authentic moments.",
    icon: "/icons/photography.gif",
  },
  {
    title: "Video Production",
    desc: "Compelling videos that engage audiences and drive results.",
    icon: "/icons/videography.gif",
  },
  {
    title: "Live Production",
    desc: "Professional live streaming and multi-camera event coverage.",
    icon: "/icons/live.gif",
  },
  {
    title: "Editing",
    desc: "Expert editing, color grading, and polished post-production.",
    icon: "/icons/edit.gif",
  },
  {
    title: "Web Designing",
    desc: "Intuitive, user-focused designs that enhance engagement.",
    icon: "/icons/ui.gif",
  },
  {
    title: "Web Development",
    desc: "Fast, responsive websites built with modern technologies.",
    icon: "/icons/develop.gif",
  },
  {
    title: "Graphic Design",
    desc: "Eye-catching visuals that communicate your brand effectively.",
    icon: "/icons/design.gif",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40 && current < services.length - 1) goTo(current + 1);
    else if (diff < -40 && current > 0) goTo(current - 1);
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="w-full bg-[#0F0F0F] text-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-16">

        {/* HEADING */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-3 md:mt-4 text-sm sm:text-base max-w-xl"
          >
            We offer a comprehensive suite of creative services to bring your
            vision to life, from concept to completion.
          </motion.p>
        </div>

        {/* ── MOBILE CAROUSEL (hidden on md+) ── */}
        <div className="mt-10 md:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="border border-[#8A2BE2]/30 bg-[#111111] rounded-2xl p-6 flex flex-col min-h-[260px]"
              >
                {/* ICON */}
                <Image
                  src={services[current].icon}
                  alt={services[current].title}
                  width={60}
                  height={60}
                  className="w-14 h-14 mb-4"
                />

                {/* TITLE */}
                <h3 className="text-base font-semibold">
                  {services[current].title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {services[current].desc}
                </p>

                {/* BUTTON */}
                <button className="mt-4 w-fit px-4 py-2 text-xs border border-white/30 rounded-full hover:bg-white/10 transition">
                  Explore More
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-2 bg-[#8A2BE2]"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          
        </div>

        {/* ── DESKTOP GRID (hidden below md) ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-[#8A2BE2]/30 bg-[#0F0F0F] p-6 rounded-xl h-[300px] flex flex-col hover:scale-[1.03] transition"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4 w-16 h-16 lg:w-20 lg:h-20"
              />
              <h3 className="text-base lg:text-lg font-semibold text-left">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 text-left leading-relaxed">
                {service.desc}
              </p>
              <button className="mt-auto px-4 py-2 text-sm border border-white/40 rounded-full hover:bg-white/10 transition w-fit">
                Explore More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}