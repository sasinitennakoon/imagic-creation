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
          "We provide creative and digital solutions including video production, live production, photography, editing, graphic design, UI/UX design, and web design & development for individuals, businesses, and brands.",
      },
      {
        question: "How can I start a project with your team?",
        answer:
          "Getting started is simple - contact us through phone, email, or our website with your project details. We’ll discuss your requirements, provide recommendations, and prepare a suitable proposal.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes. We collaborate with both local and international clients and support remote communication throughout the project process.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary depending on the scope and complexity. Smaller projects may take a few days, while larger productions or digital projects may require several weeks.",
      },
      {
        question: "Can I request custom packages?",
        answer:
          "Absolutely. We offer flexible and customized packages based on your project goals, requirements, and budget.",
      },
    ],
  },

  {
    title: "Photography",
    faqs: [
      {
        question: "Do you provide event photography?",
        answer:
          "Yes. We cover a range of events including corporate events, celebrations, brand launches, and special occasions.",
      },
      {
        question: "Can I book outdoor shoots?",
        answer:
          "Yes. Outdoor sessions can be arranged at your preferred location with planning based on concept, schedule, and conditions.",
      },
      {
        question: "Do you edit all photographs?",
        answer:
          "Yes. All selected photographs go through professional editing and enhancement to maintain quality and consistency.",
      },
      {
        question: "How are final photos delivered?",
        answer:
          "Final photographs are delivered digitally through secure online sharing methods in high-quality formats.",
      },
      {
        question: "Do you cover weddings?",
        answer:
          "Yes. We provide wedding photography services with packages that can include pre-shoots, event coverage, and post-production editing",
      },
    ],
  },

  {
    title: "Video Production",
    faqs: [
      {
        question: "What types of videos do you create?",
        answer:
          "We create promotional videos, corporate videos, event coverage, social media content, interviews, commercials, and creative storytelling productions.",
      },
      {
        question: "Do you provide scripting services?",
        answer:
          "Yes. We support concept development, script writing, storyboarding, and production planning to help bring ideas to life effectively.",
      },
      {
        question: "Can you handle drone videography?",
        answer:
          "Yes. Drone videography can be arranged depending on project requirements, location permissions, and weather conditions.",
      },
      {
        question: "How long does editing take?",
        answer:
          "Editing duration depends on the project scope, footage volume, and revision requirements. Estimated delivery timelines are shared before production begins.",
      },
      {
        question: "Can revisions be requested?",
        answer:
          "Yes. Revision rounds are available based on the selected package to ensure the final output aligns with your expectations.",
      },
    ],
  },

  {
    title: "Web Design & Development",
    faqs: [
      {
        question: "Do you build responsive websites?",
        answer:
          "Yes. All websites are designed and developed to provide a seamless experience across desktop, tablet, and mobile devices.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We work with modern technologies and frameworks selected based on project requirements to deliver performance, scalability, and great user experiences.",
      },
      {
        question: "Will I be able to manage the website later?",
        answer:
          "Yes. Depending on the project, we can provide user-friendly content management solutions and guidance for future updates.",
      },
      {
        question: "Do you provide hosting support?",
        answer:
          "Yes. We can assist with hosting setup, deployment, domain configuration, and ongoing website support.",
      },
      {
        question: "Can you redesign existing websites?",
        answer:
          "Yes. We redesign existing websites to improve usability, visual appearance, performance, and overall user experience.",
      },
    ],
  },

  {
    title: "Pricing & Support",
    faqs: [
      {
        question: "How do pricing plans work?",
        answer:
          "Pricing is customized based on project scope, deliverables, timelines, and required services. Contact us for a tailored quotation.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes. We provide post-project support and maintenance options depending on project requirements.",
      },
      {
        question: "Are revisions included in packages?",
        answer:
          "Most packages include revision rounds. The exact number varies depending on the selected service package.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers and other agreed payment methods discussed during project confirmation.",
      },
      {
        question: "Can projects be completed urgently?",
        answer:
          "Yes. Urgent projects can be accommodated depending on availability and project scope.",
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
