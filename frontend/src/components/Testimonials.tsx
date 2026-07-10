"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTestimonials } from "@/lib/api";

type Testimonial = {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  rating: number;
  authorImage?: { url: string };
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await getTestimonials();
      setTestimonials(res.data || []);
    }

    load();
  }, []);

  // const shouldCarousel = testimonials.length >= 3;
  const shouldCarousel = false; // 🔒 carousel disabled for now — cards render statically


  // AUTO SLIDE ONLY FOR 3+
  /*
  useEffect(() => {
    if (!shouldCarousel) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [shouldCarousel]);
  */


  // INFINITE LOOP RESET
  /*
  useEffect(() => {
    if (!shouldCarousel) return;

    if (current >= testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [current, testimonials, shouldCarousel]);
  */
  
  if (testimonials.length === 0) {
    return (
      <div className="text-white text-center py-20">
        Loading testimonials...
      </div>
    );
  }

  const looped = shouldCarousel
    ? [...testimonials, testimonials[0]]
    : testimonials;

  return (
    <section className="w-full bg-[#0F0F0F] text-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-16">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Our
            </span>{" "}
            Clients{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>

          <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
            A selection of our most impactful and creative work across different industries.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-14 overflow-hidden">

          {/* STATIC MODE (1 OR 2) */}
          {!shouldCarousel && (
            <div
              className={`grid gap-6 ${
                testimonials.length === 1
                  ? "grid-cols-1 max-w-xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          )}

          {/* CAROUSEL MODE (3+) — disabled for now */}
          {shouldCarousel && (
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${current * 100}%`,
              }}
              transition={{
                duration: isTransitioning ? 0.7 : 0,
                ease: "easeInOut",
              }}
            >
              {looped.map((t, i) => (
                <div
                  key={`${t.id}-${i}`}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* DOTS ONLY FOR 3+ — disabled for now */}
        {shouldCarousel && (
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#8A2BE2] w-6"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="border border-[#8A2BE2]/20 rounded-2xl p-6 md:p-8 bg-black/60 backdrop-blur-sm min-h-[280px] flex flex-col hover:border-[#8A2BE2]/50 transition-all duration-300">

      {/* RATING */}
      <div className="flex gap-1 mb-4 text-sm">
        {Array.from({ length: 5 }).map((_, star) => (
          <span key={star}>
            {star < t.rating ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      {/* QUOTE */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">
        "{t.quote}"
      </p>

      {/* USER */}
      <div className="flex items-center gap-4 mt-6">
        <img
          src={
            t.authorImage?.url
              ? `http://localhost:1337${t.authorImage.url}`
              : "/user.png"
          }
          className="w-12 h-12 rounded-full object-cover shrink-0"
          alt={t.authorName}
        />

        <div>
          <p className="text-sm font-semibold">
            {t.authorName}
          </p>

          <p className="text-xs text-gray-400">
            {t.authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}