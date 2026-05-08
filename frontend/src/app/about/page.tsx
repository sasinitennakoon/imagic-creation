"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreValues = [
  {
    title: "Creativity",
    description:
      "We craft unique visual experiences that capture attention and leave lasting impressions.",
  },
  {
    title: "Innovation",
    description:
      "We combine creativity with modern technology to deliver forward-thinking digital solutions.",
  },
  {
    title: "Quality",
    description:
      "Every project is executed with precision, professionalism, and attention to detail.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients to understand their vision and transform ideas into reality.",
  },
];

const processes = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, and project requirements before starting the creative process.",
    gif: "/process/discovery.gif",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We create structured strategies, concepts, and workflows to ensure smooth execution.",
    gif: "/process/planning.gif",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Our team brings ideas to life through high-quality visuals, design, and development.",
    gif: "/process/production.gif",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "We refine and finalize every detail to deliver impactful results that exceed expectations.",
    gif: "/process/delivery.gif",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#0F0F0F] text-white overflow-hidden">
        <Navbar />

      {/* HERO SECTION */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Create{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Digital Experiences
              </span>{" "}
              That Inspire
            </h1>

            <p
              className="text-gray-300 mt-8 text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              IMAGIC is a creative production and digital solutions agency
              focused on transforming ideas into impactful visual stories and
              digital experiences.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/Mascot 2.png"
              alt="Mascot"
              width={450}
              height={450}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who We Are
            </h2>

            <p
              className="text-gray-300 mt-6 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              IMAGIC is a multidisciplinary creative agency specializing in
              video production, photography, branding, UI/UX design, and web
              development. We help brands communicate their story through
              visually engaging and meaningful experiences.
            </p>

            <p
              className="text-gray-300 mt-6 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our mission is to combine creativity and innovation to create
              unforgettable digital experiences that build strong connections
              between brands and audiences.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/about/about-image.jpg"
              alt="Who we are"
              width={700}
              height={500}
              className="rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* VISION */}
          <div className="border border-[#8A2BE2]/40 rounded-3xl p-10 bg-[#1A1A1A]">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Vision
            </h3>

            <p
              className="text-gray-300 mt-6 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              To become a leading creative and digital solutions agency known
              for innovation, storytelling, and impactful visual experiences.
            </p>
          </div>

          {/* MISSION */}
          <div className="border border-[#8A2BE2]/40 rounded-3xl p-10 bg-[#1A1A1A]">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Mission
            </h3>

            <p
              className="text-gray-300 mt-6 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              To help businesses and individuals bring their ideas to life
              through high-quality creative production, branding, and digital
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="text-center">
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Core Values
            </h2>

            <p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The principles that guide our creativity, collaboration, and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-[#8A2BE2]/40 rounded-3xl p-8 bg-[#1A1A1A]"
              >
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>

                <p
                  className="text-gray-300 mt-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="text-center">
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Process
            </h2>

            <p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A streamlined approach that ensures creativity, quality, and
              successful project delivery.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-8">

            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="border border-[#8A2BE2]/40 rounded-3xl p-6 md:p-10 bg-[#1A1A1A] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
              >

                <div className="flex items-center gap-6 flex-1">

                  <Image
                    src={process.gif}
                    alt={process.title}
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover"
                  />

                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {process.title}
                    </h3>

                    <p
                      className="text-gray-300 mt-4 max-w-xl leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {process.description}
                    </p>
                  </div>
                </div>

                <div
                  className="text-7xl md:text-8xl font-bold text-white/40"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {process.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="text-center">
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Choose Us
            </h2>

            <p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We combine creativity, strategy, and innovation to deliver
              impactful experiences.
            </p>
          </div>

          <div className="mt-16 max-w-4xl">

            <p
              className="text-gray-300 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              At IMAGIC, we focus on delivering high-quality creative and
              digital solutions tailored to every client’s unique goals and
              vision.
            </p>

            <p
              className="text-gray-300 leading-relaxed text-lg mt-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From concept development to final delivery, our team ensures every
              project is executed with creativity, professionalism, and
              attention to detail.
            </p>

            <div className="mt-10 flex flex-col gap-5">

              {[
                "Creative and innovative solutions",
                "Experienced multidisciplinary team",
                "Client-focused collaboration",
                "High-quality production standards",
                "Reliable and timely delivery",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8A2BE2] mt-2" />

                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}