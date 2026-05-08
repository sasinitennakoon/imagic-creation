"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const faqSections = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services do you provide?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this text with your own answer.",
      },
      {
        question: "How can I start a project with your team?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this text with your own answer.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this text with your own answer.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this text with your own answer.",
      },
      {
        question: "Can I request custom packages?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this text with your own answer.",
      },
    ],
  },

  {
    title: "Photography",
    faqs: [
      {
        question: "Do you provide event photography?",
        answer:
          "Replace this content with your photography related answer.",
      },
      {
        question: "Can I book outdoor shoots?",
        answer:
          "Replace this content with your photography related answer.",
      },
      {
        question: "Do you edit all photographs?",
        answer:
          "Replace this content with your photography related answer.",
      },
      {
        question: "How are final photos delivered?",
        answer:
          "Replace this content with your photography related answer.",
      },
      {
        question: "Do you cover weddings?",
        answer:
          "Replace this content with your photography related answer.",
      },
    ],
  },

  {
    title: "Video Production",
    faqs: [
      {
        question: "What types of videos do you create?",
        answer:
          "Replace this content with your video production related answer.",
      },
      {
        question: "Do you provide scripting services?",
        answer:
          "Replace this content with your video production related answer.",
      },
      {
        question: "Can you handle drone videography?",
        answer:
          "Replace this content with your video production related answer.",
      },
      {
        question: "How long does editing take?",
        answer:
          "Replace this content with your video production related answer.",
      },
      {
        question: "Can revisions be requested?",
        answer:
          "Replace this content with your video production related answer.",
      },
    ],
  },

  {
    title: "Web Design & Development",
    faqs: [
      {
        question: "Do you build responsive websites?",
        answer:
          "Replace this content with your web related answer.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "Replace this content with your web related answer.",
      },
      {
        question: "Will I be able to manage the website later?",
        answer:
          "Replace this content with your web related answer.",
      },
      {
        question: "Do you provide hosting support?",
        answer:
          "Replace this content with your web related answer.",
      },
      {
        question: "Can you redesign existing websites?",
        answer:
          "Replace this content with your web related answer.",
      },
    ],
  },

  {
    title: "Pricing & Support",
    faqs: [
      {
        question: "How do pricing plans work?",
        answer:
          "Replace this content with your pricing related answer.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Replace this content with your pricing related answer.",
      },
      {
        question: "Are revisions included in packages?",
        answer:
          "Replace this content with your pricing related answer.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Replace this content with your pricing related answer.",
      },
      {
        question: "Can projects be completed urgently?",
        answer:
          "Replace this content with your pricing related answer.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="w-full min-h-screen bg-[#0F0F0F] text-white pt-24">
         <Navbar />
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 mb-20 md:mb-24">
        
        {/* HEADER */}
        <div className="text-center">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Questions
            </span>{" "}
            (FAQ)
          </h1>

          <p
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Find answers to the most common questions about our services,
            workflow, pricing, and support.
          </p>
        </div>

        {/* FAQ SECTIONS */}
        <div className="mt-20 space-y-16">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              
              {/* SECTION TITLE */}
              <h2
                className="text-2xl md:text-3xl font-semibold mb-8"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {section.title}
              </h2>

              {/* QUESTIONS */}
              <div className="space-y-5">
                {section.faqs.map((faq, faqIndex) => {
                  const id = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div
                      key={id}
                      className="bg-[#1E1E1E] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      
                      {/* QUESTION */}
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between text-left px-6 py-5"
                      >
                        <span
                          className="text-base md:text-lg font-medium pr-6"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {faq.question}
                        </span>

                        <span
                          className="text-3xl leading-none text-[#C51BE2]"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/10 pt-5">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
