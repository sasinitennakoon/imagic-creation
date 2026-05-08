"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

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
    image: "/services/photo.jpg",
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
    image: "/services/video.jpg",
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
    image: "/services/live.jpg",
    points: [
      "Live Streaming",
      "Multi-Camera Setup",
      "Event Broadcasting",
      "Real-time Direction",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Creative designs that elevate your brand identity and visual presence.",
    image: "/services/design.jpg",
    points: [
      "Brand Identity",
      "Posters & Flyers",
      "Social Media Designs",
      "Packaging Design",
    ],
    reverse: true,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered designs focused on usability and modern digital experiences.",
    image: "/services/uiux.jpg",
    points: ["App Design", "Web Design", "Prototyping", "User Research"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites built with latest technologies.",
    image: "/services/web.jpg",
    points: [
      "Frontend Development",
      "Backend Systems",
      "E-commerce Solutions",
      "CMS Integration",
    ],
    reverse: true,
  },
  {
    slug: "editing",
    title: "Editing",
    description:
      "Professional editing that enhances storytelling and visual impact.",
    image: "/services/edit.jpg",
    points: [
      "Video Editing",
      "Color Grading",
      "Sound Editing",
      "Post Production",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      <Navbar />

      {/* HERO */}
      <section className="w-full py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-16 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end creative solutions that bring ideas to life
            through design, technology, and storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
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
          </div>
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
            <div className="w-full md:flex-1">
              <div className="rounded-2xl overflow-hidden border border-[#8A2BE2]/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full md:flex-1">
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
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#8A2BE2] mt-0.5 flex-shrink-0">✔</span>
                    <p className="text-gray-300 text-sm sm:text-base">{p}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-7 px-6 py-2.5 text-sm md:text-base rounded-full bg-[#8A2BE2] hover:opacity-90 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}