import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/Cta";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/api";

function extractText(blocks: any[]): string {
  if (!blocks) return "";

  return blocks
    .map((block) => {
      if (!block.children) return "";

      return block.children
        .map((child: any) => child.text || "")
        .join("");
    })
    .join(" ");
}

export default async function BlogsPage() {
  const res = await getBlogs();

  const blogs = res.data || [];

  return (
    <main className="bg-[#0F0F0F] text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Insights, creative stories, production tips, and design inspiration
            from the Imagic team.
          </p>

        </div>
      </section>

      {/* BLOGS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {blogs.length === 0 ? (
            <div className="text-center text-gray-400">
              No blogs available.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogs.map((blog: any) => {
                // COVER IMAGE
                const image =
                  blog.coverImage?.url ||
                  blog.coverImage?.formats?.medium?.url ||
                  null;

                // EXCERPT
                const excerpt =
                  blog.excerpt ||
                  extractText(blog.content).slice(0, 120) ||
                  "Read more about this article.";

                return (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.slug}`}
                    className="group border border-white/10 rounded-2xl overflow-hidden bg-[#1A1A1A] hover:border-[#8A2BE2]/60 transition duration-300"
                  >

                    {/* IMAGE */}
                    <div className="relative w-full h-[220px] overflow-hidden">
                    {image ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
                        alt={blog.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2A2A2A]" />
                    )}

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      {/* DATE */}
                      <p className="text-xs text-[#8A2BE2] mb-3">
                        {blog.publishedAt
                          ? new Date(blog.publishedAt).toLocaleDateString()
                          : "Recently Published"}
                      </p>

                      {/* TITLE */}
                      <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-[#C51BE2] transition">
                        {blog.title}
                      </h2>

                      {/* EXCERPT */}
                      <p className="text-gray-400 text-sm mt-4 leading-relaxed line-clamp-3">
                        {excerpt}
                      </p>

                      {/* BUTTON */}
                      <div className="mt-6 inline-flex items-center text-sm text-[#8A2BE2]">
                        Read More →
                      </div>

                    </div>

                  </Link>
                );
              })}

            </div>
          )}

        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}