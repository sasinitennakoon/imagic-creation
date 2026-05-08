import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-[#0F0F0F] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          
          {/* HEADER */}
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Terms &{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p
              className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Please read these terms carefully before using our website or
              engaging with our creative and digital services.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="mt-20 space-y-14"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            
            {/* INTRODUCTION */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Introduction
              </h2>

              <p className="text-gray-400 leading-relaxed">
                These Terms & Conditions govern your use of the Imagic Creation
                website and services. By accessing our website or working with
                us, you agree to comply with these terms. If you do not agree
                with any part of these conditions, please refrain from using
                our services.
              </p>
            </div>

            {/* SERVICES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Our Services
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Imagic Creation provides creative and digital services
                  including:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Video Production</li>
                  <li>Live Production</li>
                  <li>Photography</li>
                  <li>Editing Services</li>
                  <li>Graphic Design</li>
                  <li>UI/UX Design</li>
                  <li>Web Design & Web Development</li>
                </ul>

                <p>
                  Service availability, timelines, and deliverables may vary
                  depending on project requirements and agreements.
                </p>
              </div>
            </div>

            {/* PROJECT AGREEMENTS */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Project Agreements
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  All projects are subject to discussion, approval, and mutual
                  agreement between the client and Imagic Creation.
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Project timelines depend on scope and complexity</li>
                  <li>Clients must provide accurate project requirements</li>
                  <li>Additional revisions may affect delivery schedules</li>
                  <li>Changes outside agreed scope may incur extra charges</li>
                </ul>
              </div>
            </div>

            {/* PAYMENTS */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Payments & Pricing
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Pricing for our services is based on project scope,
                  complexity, and production requirements.
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Advance payments may be required before work begins</li>
                  <li>Final deliverables may be released after full payment</li>
                  <li>Late payments may result in project delays</li>
                  <li>Custom quotations are valid for a limited period</li>
                </ul>
              </div>
            </div>

            {/* INTELLECTUAL PROPERTY */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Intellectual Property
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Unless otherwise agreed in writing, all concepts, designs,
                visuals, source files, and creative assets produced by Imagic
                Creation remain the intellectual property of the company until
                full payment is completed. Clients receive usage rights based
                on the agreed project terms.
              </p>
            </div>

            {/* CLIENT RESPONSIBILITIES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Client Responsibilities
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Clients are responsible for:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Providing accurate project information</li>
                  <li>Submitting content and feedback on time</li>
                  <li>Ensuring legal ownership of provided materials</li>
                  <li>Reviewing and approving deliverables promptly</li>
                </ul>
              </div>
            </div>

            {/* LIMITATION OF LIABILITY */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Limitation of Liability
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Imagic Creation shall not be held liable for indirect,
                incidental, or consequential damages arising from the use of our
                services, website interruptions, delays, or third-party
                platforms used during project execution.
              </p>
            </div>

            {/* THIRD PARTY TOOLS */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Third-Party Platforms & Tools
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Some services may involve third-party platforms, hosting
                providers, plugins, APIs, or software tools. Imagic Creation is
                not responsible for downtime, policy changes, or issues caused
                by external services beyond our control.
              </p>
            </div>

            {/* TERMINATION */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Termination
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We reserve the right to suspend or terminate services if clients
                violate agreed terms, fail to make payments, or engage in
                unlawful or abusive behavior during collaboration.
              </p>
            </div>

            {/* CHANGES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Changes to Terms
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Imagic Creation may update these Terms & Conditions at any time.
                Updated versions will be published on this page with the latest
                revision date.
              </p>
            </div>

            {/* CONTACT */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Contact Information
              </h2>

              <p className="text-gray-400 leading-relaxed">
                If you have questions regarding these Terms & Conditions,
                please contact us through our official communication channels.
              </p>

              <div className="mt-6 space-y-2 text-gray-300">
                <p>Email: hello@imagiccreation.com</p>
                <p>Phone: +94 77 123 4567</p>
                <p>Location: Kandy, Sri Lanka</p>
              </div>
            </div>

            {/* LAST UPDATED */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Last Updated — May 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}