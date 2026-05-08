import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/Cta";
import { getBlogBySlug } from "@/lib/api";

export const dynamic = "force-dynamic";

// -------------------------
// Rich Text Renderer (Strapi)
// -------------------------
function renderRichText(content: any[]) {
  if (!content) return null;

  return content.map((block: any, index: number) => {
    if (block.__component === "shared.rich-text") {
      return block.body.map((item: any, i: number) => {
        const text = item?.children?.[0]?.text || "";

        switch (item.type) {
          case "heading":
            return (
              <h2
                key={`${index}-${i}`}
                className="text-2xl md:text-3xl font-bold mt-10 mb-4"
              >
                {text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={`${index}-${i}`}
                className="text-gray-300 leading-relaxed text-base md:text-lg mb-5"
              >
                {text}
              </p>
            );

          default:
            return null;
        }
      });
    }

    return null;
  });
}

// -------------------------
// Page
// -------------------------
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getBlogBySlug(slug);
  const blog = res?.data?.[0];

  if (!blog) return notFound();

  // -------------------------
  // Image handling (Strapi safe)
  // -------------------------
  const imagePath =
    blog?.coverImage?.formats?.large?.url ||
    blog?.coverImage?.formats?.medium?.url ||
    blog?.coverImage?.url;

  const imageUrl = imagePath
    ? `http://localhost:1337${imagePath}`
    : null;

  return (
    <main className="bg-[#0F0F0F] text-white min-h-screen">
      <Navbar />

      {/* HERO IMAGE */}
      {imageUrl && (
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={imageUrl}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* CONTENT WRAPPER */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20">
        
        {/* CATEGORY + DATE */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="px-3 py-1 bg-[#1A1A1A] rounded-full border border-white/10">
            {blog.category}
          </span>

          <span>
            {blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString()
              : "Recently"}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          {blog.title}
        </h1>

        {/* EXCERPT */}
        {blog.excerpt && (
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            {blog.excerpt}
          </p>
        )}

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 my-10" />

        {/* RICH CONTENT */}
        <div className="prose prose-invert max-w-none">
          {renderRichText(blog.content)}
        </div>

        {/* BACK BUTTON */}
        <div className="mt-16">
          <a
            href="/blogs"
            className="text-sm text-[#8A2BE2] hover:text-[#C51BE2] transition"
          >
            ← Back to Blogs
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}