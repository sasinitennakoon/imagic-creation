"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-[#0F0F0F] py-12 md:py-24">
      
      {/* SAME CONTAINER AS OTHER SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* CTA BOX */}
        <div
          id="contact"
          className="relative overflow-hidden rounded-3xl bg-[#8A2BE2] px-6 py-16 sm:px-10 md:px-16 md:py-24 text-center"
        >

          {/* BACKGROUND DECORATIONS */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto">

            {/* TITLE */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Bring Your Ideas to Life?
            </h2>

            {/* DESCRIPTION */}
            <p
              className="text-white/80 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Let’s discuss your project and explore how IMAGIC can help
              you create powerful visual experiences that stand out.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

              {/* PRIMARY BUTTON */}
              <a
                href="mailto:imagiccreations@outlook.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8A2BE2] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight size={18} />
              </a>

              {/* SECONDARY BUTTON */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Our Work
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}