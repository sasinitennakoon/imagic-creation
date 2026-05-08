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


  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials]);

  // =========================
  // ♾️ INFINITE RESET LOGIC
  // =========================
  useEffect(() => {
    if (testimonials.length === 0) return;

    if (current === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 600);
    }
  }, [current, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <div className="text-white text-center py-20">
        Loading testimonials...
      </div>
    );
  }
  const looped = [...testimonials, ...testimonials.slice(0, 3)];

  return (
    <section className="w-full bg-[#0F0F0F] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center"
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

          <p className="text-gray-400 mt-4 max-w-2xl">
            A selection of our most impactful and creative work across different industries.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden mt-14">
          <motion.div
            className="flex gap-8"
            animate={{
              x: `-${current * 33.333}%`,
            }}
            transition={{
              duration: isTransitioning ? 0.6 : 0,
              ease: "easeInOut",
            }}
          >
            {looped.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="min-w-full md:min-w-[50%] lg:min-w-[30%]"
              >
                <div className="border border-[#8A2BE2]/30 rounded-xl p-8 bg-black min-h-[280px] flex flex-col">

                  {/* ⭐ RATING */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <span key={star}>
                        {star < t.rating ? "⭐" : "☆"}
                      </span>
                    ))}
                  </div>

                  {/* QUOTE */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
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
                      className="w-12 h-12 rounded-full object-cover"
                      alt={t.authorName}
                    />

                    <div>
                      <p className="text-sm font-semibold">{t.authorName}</p>
                      <p className="text-xs text-gray-400">{t.authorRole}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === current ? "bg-[#8A2BE2]" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}