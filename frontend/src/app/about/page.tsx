"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const VisionIcon = "/vision icon.png";
const MissionIcon = "/mission icon.png";

const coreValues = [
  {
    icon: "/icons/Trophy.gif",
    title: "Excellence in Everything",
    description:
      "We're obsessed with quality. Every project receives the same meticulous attention to detail, from initial concept to final delivery.",
  },
  {
    icon: "/icons/Team.gif",
    title: "Collaborative Partnership",
    description:
      "We're obsessed with quality. Every project receives the same meticulous attention to detail, from initial concept to final delivery.",
  },
  {
    icon: "/icons/lightbulb.gif",
    title: "Creative Innovation",
    description:
      "We stay ahead of trends and technology, constantly exploring new techniques to deliver fresh, effective creative solutions.",
  },
  {
    icon: "/icons/chat.gif",
    title: "Transparent Communication",
    description:
      "No surprises, no confusion. We keep you informed every step of the way with clear timelines, realistic expectations, and honest feedback.",
  },
];

const processes = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by learning about your goals, ideas, and vision.",
    gif: "/process/Brain.gif",
  },
  {
    step: "02",
    title: "Create",
    description:
      "We explore concepts and bring ideas to life through design and production.",
    gif: "/process/Cube 3d.gif",
  },
  {
    step: "03",
    title: "Refine",
    description:
      "We carefully review, edit, and improve every detail.",
    gif: "/process/Edit.gif",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "We finalize and deliver a result that reflects your vision and purpose.",
    gif: "/process/Success.gif",
  },
];


export default function AboutPage() {
  return (
    <main className="w-full bg-[#0F0F0F] text-white overflow-hidden ">
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
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center md:text-left"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The{" "}
          <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
            Story
          </span>
          <br />
          Behind{" "}
          <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
            IMAGIC
          </span>
        </h1>

            <p
              className="text-gray-300 mt-4 md:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left"
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
              src="/mascot 3.png"
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
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h2
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Who{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              We
            </span>{" "}
            Are{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Simply
            </span>
          </h2>

            <p
              className="text-gray-300 mt-6 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Imagic is a creative production studio built on imagination, innovation, and storytelling.
            </p>

            <p
              className="text-gray-300 mt-6 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We specialize in video production, live production, photography, editing, UI/UX design, web development, and graphic design — bringing ideas to life across every visual medium.
Our team is made up of passionate creators who believe that every project is more than just work — it’s an experience, a story, a moment worth remembering.
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
              src="/who we are.jpg"
              alt="Who we are"
              width={700}
              height={500}
              className="rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* VISION */}
          <div className="bg-[#1A1A1A] p-10 rounded-3xl text-center flex flex-col items-center">
            <Image src={VisionIcon} alt="Vision" width={60} height={60} />
            <p className="text-sm text-gray-400 mt-3">Vision</p>

                <h3
                className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What{" "}
                <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                  Drives
                </span>{" "}
                Us{" "}
              </h3>

                <p className="text-gray-300 mt-4">
                  To create impactful visual and digital experiences that help brands communicate, connect, and grow.
                </p>
              </div>

              {/* MISSION */}
              <div className="bg-[#1A1A1A] p-10 rounded-3xl text-center flex flex-col items-center">
                <Image src={MissionIcon} alt="Mission" width={60} height={60} />
                <p className="text-sm text-gray-400 mt-3">Mission</p>

                <h3
                className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Where{" "}
                <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                  We’re
                </span>{" "}
                Headed{" "}
              </h3>

            <p className="text-gray-300 mt-4">
              To grow into a trusted creative studio known for quality, innovation, and storytelling.
            </p>
          </div>
        </div>
      </section>


      {/* CORE VALUES */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="text-center">
            <h2
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Core
            </span>{" "}
            Values{" "}
          </h2>

            <p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14">

            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-[#8A2BE2]/30 bg-[#111111] rounded-2xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition"
              >

                {/* ICON / GIF (same style as Services) */}
                <Image src={value.icon} alt="" width={70} height={70} />

                {/* TITLE */}
                <h3 className="text-base lg:text-lg font-semibold">
                  {value.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
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
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Magic
            </span>{" "}
            Through{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

            <p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our process is designed to deliver exceptional results while making your experience smooth and enjoyable.
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
                className="border border-[#8A2BE2]/40 rounded-3xl p-6 md:p-10  flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
              >

                <div className="flex items-center gap-6 flex-1">

                  <Image
                    src={process.gif}
                    alt={process.title}
                    width={50}
                    height={50}
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
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] items-center gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Choose
              </span>{" "}
              Us{" "}
            </h2>

            <div className="mt-8 flex flex-col gap-6 max-w-2xl">

              <p
                className="text-gray-300 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                At Imagic, we believe great work comes from understanding, creativity, and attention to detail.
                As a small and growing studio, we stay closely involved in every project, ensuring each idea is carefully crafted and thoughtfully executed.
              </p>

              <p
                className="text-gray-300 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We do not just deliver visuals; we create work that connects, communicates, and leaves a lasting impression.
              </p>

              <div className="flex flex-col gap-4 pt-2">

                {[
                  "Personal & collaborative approach - we work closely with you at every step",
                  "Creative + practical thinking - ideas that look good and work well",
                  "Attention to detail - every element is carefully refined",
                  "Focused on quality - we prioritize meaningful results over quantity",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-left"
                  >
                    <div className="mt-2.5 h-2.5 w-2.5 flex-none rounded-full bg-[#8A2BE2]" />

                    <p
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MASCOT */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/mascot 4.png"
              alt="Mascot"
              width={420}
              height={420}
              className="h-auto w-[240px] sm:w-[300px] lg:w-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
