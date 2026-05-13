"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  projectType?: string;
  coverImage?: { url?: string };
};

const categoryColors: Record<string, string> = {
  "web development": "bg-blue-500/80 text-white",
  "web design": "bg-purple-500/80 text-white",
  "video production": "bg-pink-500/80 text-white",
  photography: "bg-yellow-500/80 text-white",
  editing: "bg-green-500/80 text-white",
  "graphic design": "bg-orange-500/80 text-white",
  "live production": "bg-red-500/80 text-white",
};

const filters = [
  { label: "All", value: "all" },
  { label: "Photography", value: "Photography" },
  { label: "Video Production", value: "Video Production" },
  { label: "Live Production", value: "Live Production" },
  { label: "Editing", value: "Editing" },
  { label: "Web Design", value: "Web Design" },
  { label: "Web Development", value: "Web Development" },
  { label: "Graphic Design", value: "Graphic Design" },
];

// ✅ COMPONENT 1: contains useSearchParams + all the page content
function ProjectsContent() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("type") || "all";
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*&sort=createdAt:desc`
      );
      const data = await res.json();
      setProjects(data.data || []);
    }
    load();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) => p.projectType?.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-20 md:mb-24">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-5 md:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
            Work
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base"
        >
          Explore our creative portfolio featuring projects in photography,
          production, design, branding, development, and digital experiences.
        </motion.p>
      </div>

      {/* FILTER CHIPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: smoothEase }}
        className="mt-12"
      >
        <div className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-4">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-center [-webkit-overflow-scrolling:touch] touch-pan-x">
            {filters.map((item) => {
              const isActive =
                activeFilter.toLowerCase() === item.value.toLowerCase();
              return (
                <Link
                  key={item.value}
                  href={
                    item.value === "all"
                      ? "/projects"
                      : `/projects?type=${encodeURIComponent(item.value)}`
                  }
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#C51BE2] to-[#8A2BE2] text-white"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* PROJECT GRID */}
      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="flex flex-col items-center justify-center text-center py-20 border border-white/10 rounded-2xl bg-white/5 mt-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            No Projects Found
          </h3>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-md">
            Currently there are no projects in this category. Please check
            back later or explore other categories.
          </p>
          <Link
            href="/projects"
            className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#C51BE2] to-[#8A2BE2] text-sm hover:opacity-90 transition"
          >
            View All Projects
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {filteredProjects.map((p, index) => {
            const img = p.coverImage?.url;
            const normalizedType = p.projectType?.toLowerCase() || "";
            const isLarge = index % 5 === 0;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.08,
                  ease: smoothEase,
                }}
                whileHover={{ scale: 1.02 }}
                className={isLarge ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group bg-[#1E1E1E] border border-[#8A2BE2]/20 rounded-2xl overflow-hidden hover:border-[#8A2BE2]/60 transition-colors duration-300 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden h-[240px]">
                    {img && (
                      <img
                        src={img.startsWith("http") ? img : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur-md ${
                        categoryColors[normalizedType] || "bg-white/10 text-white"
                      }`}
                    >
                      {p.projectType}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h2
                      className={`font-semibold leading-tight ${
                        isLarge ? "text-2xl md:text-3xl" : "text-xl"
                      }`}
                    >
                      {p.title}
                    </h2>
                    <p
                      className={`text-gray-400 leading-relaxed mt-3 ${
                        isLarge ? "text-base" : "text-sm"
                      }`}
                    >
                      {p.subtitle}
                    </p>
                    <div className="mt-auto pt-8">
                      <div className="w-full h-px bg-white/10 mb-5" />
                      <div className="flex items-center gap-2 text-sm text-white">
                        <span className="group-hover:underline">Read More</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ✅ COMPONENT 2: outer shell — Suspense wraps ProjectsContent
export default function ProjectsPage() {
  return (
    <section className="w-full bg-[#0F0F0F] text-white pt-32">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <ProjectsContent />
      </Suspense>
      <Footer />
    </section>
  );
}