"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ClientLogo = {
  id: number;
  name: string;
  logo: string;
};

const clients: ClientLogo[] = [
  { id: 1, name: "Sandeshaya", logo: "/clients/sandeshaya w.png" },
  { id: 2, name: "Vikalpani Eco Seeds", logo: "/clients/wikalpani w.png" },
  { id: 3, name: "Vishwa Vilasitha", logo: "/clients/vishwa w.png" },
  { id: 4, name: "SL Saukyadana", logo: "/clients/saukyadana w.png" },
  { id: 5, name: "Vithursha Kamaleswaran", logo: "/clients/vithursha w.png" },
];

export default function Clients() {
  return (
    <section className="w-full bg-[#0F0F0F] text-white py-12 md:py-24 overflow-hidden">

      {/* HEADER (same system as About) */}
      <div className="flex flex-col items-center text-center">

          <motion.h2 initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-5xl font-bold text-center" 
            style={{ fontFamily: "var(--font-heading)" }} >
            We{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Are
            </span>{" "}
            Working{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              With
            </span>
          </motion.h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about working with Imagic.
          </p>
        </div>

      {/* MARQUEE (same container width system) */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-14 overflow-hidden">

        <div className="relative overflow-hidden">

          <div className="flex w-max items-center gap-16 animate-marquee">

            {/* FIRST SET */}
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center w-[220px] shrink-0 opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}

            {/* SECOND SET (loop) */}
            {clients.map((client) => (
              <div
                key={`dup-${client.id}`}
                className="flex items-center justify-center w-[180px] shrink-0 opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>

    </section>
  );
}