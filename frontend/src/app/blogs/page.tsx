"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/api";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function extractText(blocks: any[]): string {
  if (!blocks) return "";
  return blocks
    .map((block) => {
      if (!block.children) return "";
      return block.children.map((child: any) => child.text || "").join("");
    })
    .join(" ");
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await getBlogs();
      setBlogs(res.data || []);
    }
    load();
  }, []);

  return (
    <main className="bg-[#0F0F0F] text-white pt-8 md:pt-20">
      <Navbar />

      {/* HERO */}
      <section className="py-24">
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
              Blogs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base"
          >
            Insights, creative stories, production tips, and design inspiration
            from the Imagic team.
          </motion.p>

        </div>
      </section>

      {/* BLOGS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {blogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-center text-gray-400"
            >
              No blogs available.
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any, index: number) => {
                const image =
                  blog.coverImage?.url ||
                  blog.coverImage?.formats?.medium?.url ||
                  null;

                const excerpt =
                  blog.excerpt ||
                  extractText(blog.content).slice(0, 120) ||
                  "Read more about this article.";

                return (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: (index % 3) * 0.08,
                      ease: smoothEase,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group relative rounded-2xl overflow-hidden bg-[#151515] border border-white/10 hover:border-[#8A2BE2]/60 transition-colors duration-500 flex flex-col h-full"
                    >
                      {/* IMAGE */}
                      <div className="relative h-[240px] overflow-hidden">
                        {image ? (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
                            alt={blog.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#2A2A2A]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        {blog.category && (
                          <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-[#C51BE2] backdrop-blur-md border border-white/10 text-white">
                            {blog.category}
                          </div>
                        )}
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <h2 className="text-xl font-semibold leading-snug group-hover:text-[#C51BE2] transition">
                          {blog.title}
                        </h2>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">
                          {excerpt}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm text-white font-medium group-hover:tracking-wide transition-all">
                            Read More
                          </span>
                          <span className="text-white text-lg group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}