import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p
              className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Your privacy matters to us. This Privacy Policy explains how
              Imagic Creation collects, uses, and protects your information.
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
                Imagic Creation is a creative production house and digital
                agency offering services including video production, live
                production, photography, editing, graphic design, UI/UX design,
                and web development. We are committed to protecting your
                personal information and ensuring transparency in how your data
                is collected and used.
              </p>
            </div>

            {/* INFORMATION WE COLLECT */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Information We Collect
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  We may collect personal information when you:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Contact us through forms on our website</li>
                  <li>Request quotations or project consultations</li>
                  <li>Communicate with us through email or WhatsApp</li>
                  <li>Subscribe to updates or newsletters</li>
                  <li>Use our website and digital services</li>
                </ul>

                <p>
                  This information may include your name, email address,
                  phone number, company name, and project details.
                </p>
              </div>
            </div>

            {/* HOW WE USE DATA */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                How We Use Your Information
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  We use collected information to:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Respond to inquiries and project requests</li>
                  <li>Provide quotations and consultations</li>
                  <li>Improve our services and website experience</li>
                  <li>Communicate project updates and support</li>
                  <li>Maintain internal records and analytics</li>
                </ul>

                <p>
                  We do not sell or share your personal data with third parties
                  for marketing purposes.
                </p>
              </div>
            </div>

            {/* COOKIES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Cookies & Analytics
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Our website may use cookies and analytics tools to understand
                visitor behavior, improve performance, and enhance user
                experience. These tools help us identify which content and
                services are most useful to our visitors.
              </p>
            </div>

            {/* DATA SECURITY */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Data Security
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We take reasonable measures to protect your personal information
                from unauthorized access, misuse, or disclosure. However, no
                method of internet transmission or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* THIRD PARTY SERVICES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Third-Party Services
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Our website may contain links to third-party platforms such as
                social media services, Google Maps, or external hosting
                providers. We are not responsible for the privacy practices of
                those external websites or services.
              </p>
            </div>

            {/* USER RIGHTS */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Your Rights
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  You may request to:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or outdated information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent for future communications</li>
                </ul>
              </div>
            </div>

            {/* POLICY UPDATES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Policy Updates
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technologies, or legal requirements.
                Any updates will be posted on this page with the revised
                effective date.
              </p>
            </div>

            {/* CONTACT */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Contact Us
              </h2>

              <p className="text-gray-400 leading-relaxed">
                If you have any questions regarding this Privacy Policy or how
                your information is handled, please contact Imagic Creation
                through our official email or contact page.
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