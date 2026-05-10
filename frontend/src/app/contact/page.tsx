"use client";

import { useState, useRef } from "react";
import {
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+\d\s\-().]{7,20}$/;

  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Full name must be at least 2 characters.";

  if (!data.email.trim() || !emailRegex.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!data.phone.trim() || !phoneRegex.test(data.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!data.service)
    errors.service = "Please select a service.";

  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Project details must be at least 20 characters.";

  return errors;
}

// ─── Input field component ────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm text-gray-300 mb-2 block">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full bg-[#0F0F0F] border ${
    hasError ? "border-red-500/70" : "border-white/10"
  } rounded-xl px-4 py-3.5 sm:py-4 text-base text-white placeholder:text-gray-500 outline-none focus:border-[#8A2BE2] transition`;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [serverError, setServerError] = useState("");

  // Honeypot — invisible to humans, filled by bots
  const honeypotRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    // Client-side validation
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, honeypot: honeypotRef.current?.value ?? "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setServerError("Too many submissions. Please try again later.");
        } else if (data.error?.details?.errors) {
  setErrors(data.error.details.errors);
        } else {
          setServerError(data.error?.message ?? "Something went wrong. Please try again.");
        }
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#0F0F0F] text-white pt-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <div>
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Create
              </span>
            </div>

            <div>
              Something{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Great
              </span>
            </div>
          </h1>
          <p className="text-gray-400 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Have a project in mind? Let&apos;s discuss your ideas and turn them into
            impactful digital experiences and creative productions.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-6 md:gap-8 xl:gap-10 mt-12 md:mt-16">

          {/* LEFT CARD - FORM */}
          <div className="min-w-0 bg-[#1E1E1E] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex h-full min-h-0 xl:min-h-[820px] flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8">Send Us a Message</h2>

            {/* ── Success state ── */}
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center py-16 text-center gap-4">
                <FaCheckCircle className="text-5xl text-[#8A2BE2]" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-center xl:text-left">Message Sent!</h3>
                <p className="text-gray-400 max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl border border-[#8A2BE2]/50 text-[#C51BE2] hover:bg-[#8A2BE2]/10 transition text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-1 flex-col" noValidate>
                <div className="space-y-4 md:space-y-6">

                  {/* ── Honeypot (hidden from real users) ── */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="_trap"
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                    style={{ display: "none" }}
                  />

                  {/* FULL NAME */}
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass(!!errors.name)}
                      autoComplete="name"
                    />
                  </Field>

                  {/* EMAIL */}
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={inputClass(!!errors.email)}
                      autoComplete="email"
                    />
                  </Field>

                  {/* PHONE */}
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={inputClass(!!errors.phone)}
                      autoComplete="tel"
                    />
                  </Field>

                  {/* SERVICE */}
                  <Field label="Service Needed" error={errors.service}>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass(!!errors.service)} appearance-none pr-12`}
                      >
                        <option value="" disabled className="bg-[#1E1E1E] text-gray-400">
                          Select a service
                        </option>
                        {[
                          "Photography",
                          "Video Production",
                          "Live Production",
                          "Editing",
                          "Graphic Design",
                          "Web Design",
                          "Web Development",
                        ].map((s) => (
                          <option key={s} value={s} className="bg-[#1E1E1E] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
                    </div>
                  </Field>

                  {/* PROJECT DETAILS */}
                  <Field label="Project Details" error={errors.message}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your project... (min. 20 characters)"
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    <p className="mt-1 text-xs text-gray-600 text-right">
                      {formData.message.length} / 20 min
                    </p>
                  </Field>

                  {/* Server-level error */}
                  {serverError && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {serverError}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-8 xl:mt-auto">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] text-white font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT CARD */}
          <div className="min-w-0 bg-[#1E1E1E] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex h-full min-h-0 xl:min-h-[820px] flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-center xl:text-left">Contact Information</h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "imagiccreations@outlook.com" },
                { icon: <FaPhoneAlt />, label: "Phone Number", value: "+94 70 670 0770" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "13, 2nd Lane, Nawala, Koswatte" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 mb-2">{label}</p>
                    <p className="text-base sm:text-lg leading-relaxed break-words">{value}</p>
                  </div>
                </div>
              ))}

              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="mt-1 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                  <FaClock />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-400 mb-2">Business Hours</p>
                  <p className="text-base sm:text-lg">Monday – Friday</p>
                  <p className="text-gray-400 mt-1">9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* QUICK RESPONSE */}
            <div className="mt-10 sm:mt-12">
              <h3 className="text-lg sm:text-xl font-semibold mb-5">Quick Response</h3>
              <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  "We typically respond to all inquiries within 24 hours during business days.",
                  "For urgent requests, please call us directly.",
                  "We keep you updated at every stage, ensuring a smooth and transparent collaboration.",
                ].map((text) => (
                  <li key={text} className="flex min-w-0 items-start gap-3">
                    <span className="text-[#8A2BE2] mt-1">•</span>
                    <span className="min-w-0 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/94706700770"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 xl:mt-auto w-full bg-[#25D366] hover:bg-[#20ba5a] transition text-white rounded-xl py-3 md:py-4 flex items-center justify-center gap-3 font-medium text-sm md:text-base"
            >
              <FaWhatsapp className="text-2xl" />
              Chat with WhatsApp
            </a>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-12 mb-20 md:mb-24">
          <div className="overflow-hidden rounded-3xl border border-white/10 h-[250px] sm:h-[350px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8989397915257!2d79.89507187498435!3d6.9026878930966475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf605fe9c6715711%3A0x7ee8763a5016449d!2sImagic%20Creation!5e0!3m2!1sen!2slk!4v1778231881236!5m2!1sen!2slk"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
