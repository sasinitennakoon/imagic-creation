"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  points: string[];
  reverse?: boolean;
};

const services: Service[] = [
  {
    slug: "photography",
    title: "Photography",
    description:
      "Capturing moments with creativity and precision to tell powerful visual stories.",
    image: "/services/photography.jpg",
    points: [
      "Corporate Photography",
      "Event Coverage",
      "Product Shoots",
      "Outdoor Sessions",
    ],
  },
  {
    slug: "video-production",
    title: "Video Production",
    description:
      "We create cinematic and engaging videos tailored for brands and businesses.",
    image: "/services/video production.jpg",
    points: [
      "Commercial Videos",
      "Corporate Films",
      "Social Media Content",
      "Event Videography",
    ],
    reverse: true,
  },
  {
    slug: "live-production",
    title: "Live Production",
    description:
      "Professional live event streaming and multi-camera production setups.",
    image: "/services/live production.jpg",
    points: [
      "Live Streaming",
      "Multi-Camera Setup",
      "Event Broadcasting",
      "Real-time Direction",
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    description:
      "User-centered designs focused on usability and modern digital experiences.",
    image: "/services/web design.jpg",
    points: ["App Design", "Web Design", "Prototyping", "User Research"],
    reverse: true,
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites built with latest technologies.",
    image: "/services/web development.jpg",
    points: [
      "Frontend Development",
      "Backend Systems",
      "E-commerce Solutions",
      "CMS Integration",
    ],
  },
  {
    slug: "editing",
    title: "Editing",
    description:
      "Professional editing that enhances storytelling and visual impact.",
    image: "/services/editing.jpg",
    points: [
      "Video Editing",
      "Color Grading",
      "Sound Editing",
      "Post Production",
    ],
    reverse: true,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Creative designs that elevate your brand identity and visual presence.",
    image: "/services/graphic design.jpg",
    points: [
      "Brand Identity",
      "Posters & Flyers",
      "Social Media Designs",
      "Packaging Design",
    ],
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ServicesPage() {
  return (
    <main className="bg-[#0F0F0F] text-white pt-10 md:pt-20">
      <Navbar />

      {/* HERO */}
      <section className="w-full py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-16 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
            className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We provide end-to-end creative solutions that bring ideas to life
            through design, technology, and storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: smoothEase }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full text-sm md:text-base bg-[#8A2BE2] hover:opacity-90 transition"
            >
              Explore Our Works
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-sm md:text-base border border-white/30 hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20 md:pb-28 space-y-20 md:space-y-28">
        {services.map((service) => (
          <div
            key={service.slug}
            className={`max-w-7xl mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-12 ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              className="w-full md:flex-1"
              initial={{ opacity: 0, x: service.reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <div className="rounded-2xl overflow-hidden border border-[#8A2BE2]/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              className="w-full md:flex-1"
              initial={{ opacity: 0, x: service.reverse ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h2>

              <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="mt-5 space-y-3">
                {service.points.map((p, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: smoothEase,
                    }}
                  >
                    <span className="text-[#8A2BE2] mt-0.5 flex-shrink-0">✔</span>
                    <p className="text-gray-300 text-sm sm:text-base">{p}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block mt-7 px-6 py-2.5 text-sm md:text-base rounded-full bg-[#8A2BE2] hover:opacity-90 transition"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}