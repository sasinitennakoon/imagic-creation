"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getFeaturedProjects();
      setProjects(data.data || []);
    }
    load();
  }, []);



  const categoryColors: Record<string, string> = {
  "web development": "bg-blue-500/50 text-[#0F0F0F]",
  "web design": "bg-purple-500/20 text-[#0F0F0F]",
  "video production": "bg-pink-500/20 text-[#0F0F0F]",
  "photography": "bg-yellow-500/20 text-[#0F0F0F]",
  "editing": "bg-green-500/20 text-[#0F0F0F]",
  "graphic design": "bg-orange-500/20 text-[#0F0F0F]",
  "live production": "bg-red-500/20 text-[#0F0F0F]",
};

  return (
    <section className="w-full bg-[#0F0F0F] text-white py-24">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">

          <motion.h2 initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-5xl font-bold text-center" 
            style={{ fontFamily: "var(--font-heading)" }} >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Works
            </span>{" "}
            Speaks{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Volumes
            </span>
          </motion.h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            A selection of our most impactful and creative work across different industries.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {projects.map((p, i) => {
            const img = p.coverImage?.url;
            const normalizedType = p.projectType?.toLowerCase();

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-[#8A2BE2]/30 rounded-xl overflow-hidden bg-[#1E1E1E] hover:scale-[1.02] transition"
              >

                {/* IMAGE */}
                <div className="relative w-full h-[220px]">

                  {img && (
                    <img
                    src={`http://localhost:1337${img}`}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    />
                  )}

                  {/* TAG */}
                  <span
                    className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full border border-white/20 ${
                        categoryColors[normalizedType] || "bg-white/10 text-white"
                    }`}
                    >
                    {p.projectType}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col h-[220px]">

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold">
                    {p.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                    {p.subtitle}
                  </p>

                  {/* LINE */}
                  <div className="w-full h-px bg-white/10 my-4" />

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-auto">

                    <Link
                        href={`/projects/${p.slug}`}
                        className="text-sm flex items-center gap-2 group"
                        >
                        <span className="group-hover:underline">Read More</span>
                        <span className="transform group-hover:translate-x-1 transition">→</span>
                     </Link>

                    

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-16">
        <Link
            href="/projects"
            className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
            <span className="group-hover:underline">
            View Our Full Portfolio
            </span>

            <span className="transform transition group-hover:translate-x-1">
            →
            </span>
        </Link>
        </div>

      </div>
    </section>
  );
}