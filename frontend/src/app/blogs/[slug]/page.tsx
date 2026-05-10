import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/Cta";

export const dynamic = "force-dynamic";

/* ─────────────────────────────────────────────
   DATA FETCHING
   Uses inline fetch with populate=* to guarantee
   coverImage is always populated (fixes missing cover)
───────────────────────────────────────────── */

async function getBlog(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.[0] ?? null;
}

async function getAllBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?fields[0]=slug&fields[1]=title&sort=publishedAt:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.data ?? [];
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

function formatDate(raw: string | null | undefined): string {
  if (!raw) return "Recently";
  try {
    return new Date(raw).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return raw;
  }
}

/**
 * Resolve cover image URL across all Strapi response shapes:
 *  - v4 with formats: blog.coverImage.formats.large.url
 *  - v4 flat:         blog.coverImage.url
 *  - v5 nested data:  blog.coverImage.data.attributes.url
 */
function resolveCoverUrl(coverImage: any): string | null {
  if (!coverImage) return null;

  // v5: { data: { attributes: { url, formats } } }
  const attrs = coverImage?.data?.attributes ?? coverImage;

  const url =
    attrs?.formats?.large?.url ??
    attrs?.formats?.medium?.url ??
    attrs?.formats?.small?.url ??
    attrs?.url ??
    null;

  if (!url) return null;
  // Strapi returns relative paths like /uploads/...
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}

/* ─────────────────────────────────────────────
   RICH TEXT RENDERER
   Handles shared.rich-text component blocks
───────────────────────────────────────────── */

function renderChildren(children: any[]): React.ReactNode {
  if (!children) return null;
  return children.map((child: any, i: number) => {
    if (child.bold)
      return (
        <strong key={i} className="font-semibold text-zinc-200">
          {child.text}
        </strong>
      );
    if (child.italic)
      return (
        <em key={i} className="italic text-zinc-300">
          {child.text}
        </em>
      );
    if (child.code)
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded text-sm font-mono"
          style={{
            background: "rgba(138,43,226,0.15)",
            color: "#c084fc",
          }}
        >
          {child.text}
        </code>
      );
    if (child.type === "link")
      return (
        <a
          key={i}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#8A2BE2" }}
          className="underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {child.children?.[0]?.text ?? child.url}
        </a>
      );
    return <span key={i}>{child.text}</span>;
  });
}

function renderRichTextBlock(item: any, key: string): React.ReactNode {
  switch (item.type) {
    case "heading": {
      const level = item.level ?? 2;
      const text = renderChildren(item.children);
      const cls =
        "font-bold tracking-tight text-white mt-12 mb-4 leading-tight";
      if (level === 1)
        return (
          <h1 key={key} className={`text-4xl ${cls}`}>
            {text}
          </h1>
        );
      if (level === 2)
        return (
          <h2 key={key} className={`text-3xl ${cls}`}>
            {text}
          </h2>
        );
      if (level === 3)
        return (
          <h3 key={key} className={`text-2xl ${cls}`}>
            {text}
          </h3>
        );
      return (
        <h4 key={key} className={`text-xl ${cls}`}>
          {text}
        </h4>
      );
    }

    case "paragraph":
      return (
        <p key={key} className="text-base md:text-lg leading-8 text-zinc-400 mb-5">
          {renderChildren(item.children)}
        </p>
      );

    case "list":
      return item.format === "ordered" ? (
        <ol key={key} className="space-y-2 pl-0 mb-5 counter-reset-list">
          {item.children?.map((li: any, j: number) => (
            <li key={j} className="flex items-start gap-3 text-zinc-400">
              <span
                className="mt-1 text-sm font-bold tabular-nums shrink-0"
                style={{ color: "#8A2BE2", minWidth: "1.5rem" }}
              >
                {j + 1}.
              </span>
              <span className="leading-7">{renderChildren(li.children)}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul key={key} className="space-y-2 pl-0 mb-5">
          {item.children?.map((li: any, j: number) => (
            <li key={j} className="flex items-start gap-3 text-zinc-400">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: "#8A2BE2" }}
              />
              <span className="leading-7">{renderChildren(li.children)}</span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={key}
          className="my-8 rounded-2xl px-8 py-7"
          style={{
            background:
              "linear-gradient(135deg,rgba(138,43,226,.10) 0%,rgba(0,0,0,0) 100%)",
            border: "1px solid rgba(138,43,226,.25)",
          }}
        >
          <span
            className="block text-5xl font-serif leading-none mb-2 select-none"
            style={{ color: "#8A2BE2" }}
            aria-hidden
          >
            "
          </span>
          <p className="text-xl italic text-zinc-200 leading-relaxed">
            {renderChildren(item.children)}
          </p>
        </blockquote>
      );

    case "code":
      return (
        <pre
          key={key}
          className="my-6 overflow-x-auto rounded-xl p-5 text-sm font-mono leading-7"
          style={{
            background: "rgba(138,43,226,0.08)",
            border: "1px solid rgba(138,43,226,0.2)",
            color: "#c084fc",
          }}
        >
          <code>{renderChildren(item.children)}</code>
        </pre>
      );

    case "image":
      return item.image?.url ? (
        <figure key={key} className="my-10">
          <div className="overflow-hidden rounded-xl bg-zinc-900">
            <img
              src={resolveCoverUrl(item.image) ?? ""}
              alt={item.image.alternativeText ?? ""}
              className="w-full h-auto object-cover"
            />
          </div>
          {item.image.caption && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500">
              {item.image.caption}
            </figcaption>
          )}
        </figure>
      ) : null;

    default:
      return null;
  }
}

function renderContent(content: any[]): React.ReactNode {
  if (!content?.length) return null;

  return content.map((block: any, blockIdx: number) => {
    // shared.rich-text component
    if (block.__component === "shared.rich-text") {
      return (block.body ?? []).map((item: any, i: number) =>
        renderRichTextBlock(item, `${blockIdx}-${i}`)
      );
    }
    // Direct rich text array (some Strapi setups return blocks directly)
    if (block.type) {
      return renderRichTextBlock(block, `${blockIdx}`);
    }
    return null;
  });
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [blog, allBlogs] = await Promise.all([
    getBlog(slug),
    getAllBlogs(),
  ]);

  if (!blog) notFound();

  const attrs = blog.attributes ?? blog;

  /* ── Cover image (fixed) ── */
  const coverUrl = resolveCoverUrl(attrs.coverImage);

  /* ── Prev / Next ── */
  const currentIndex = allBlogs.findIndex(
    (b: any) => (b.attributes ?? b).slug === slug
  );
  const prevAttrs =
    currentIndex > 0
      ? (allBlogs[currentIndex - 1].attributes ?? allBlogs[currentIndex - 1])
      : null;
  const nextAttrs =
    currentIndex < allBlogs.length - 1
      ? (allBlogs[currentIndex + 1].attributes ?? allBlogs[currentIndex + 1])
      : null;

  return (
    <main className="min-h-screen bg-black text-white font-sans">
     

      {/* ══════════════════════════════════════════
          STICKY TOP BAR — back arrow only
      ══════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/blogs"
            aria-label="Back to blogs"
            className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-[#8A2BE2] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-[#8A2BE2] transition-colors duration-200" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blog
          </Link>

          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <span className="text-zinc-300 truncate max-w-[200px]">
            {attrs.title}
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
          {attrs.title}
        </h1>

        {/* Excerpt */}
        {attrs.excerpt && (
          <p className="mt-5 text-lg md:text-xl text-zinc-400 leading-relaxed">
            {attrs.excerpt}
          </p>
        )}

        {/* ✅ CATEGORY + DATE (NOW ABOVE COVER IMAGE) */}
        <div className="flex items-center justify-between mt-6">

          {attrs.category && (
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(138,43,226,0.12)",
                color: "#C084FC",
                border: "1px solid rgba(138,43,226,0.25)",
              }}
            >
              {attrs.category}
            </span>
          )}

          <span className="text-xs text-zinc-500">
            {formatDate(attrs.publishedAt)}
          </span>

        </div>

      </header>

      {/* ══════════════════════════════════════════
          COVER IMAGE  (fixed with resolveCoverUrl)
      ══════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════
          COVER IMAGE
          ══════════════════════════════════════════ */}
        {coverUrl && (
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="overflow-hidden rounded-2xl bg-zinc-900 aspect-[16/9]"
              style={{ boxShadow: "0 0 80px rgba(138,43,226,0.12)" }}
            >
              <img
                src={coverUrl}
                alt={attrs.coverImage?.alternativeText ?? attrs.title}
                className="w-full h-full object-cover"
              />
            </div>

            
          </div>
        )}

      {/* ══════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-12 border-t border-white/10" />
      </div>

      {/* ══════════════════════════════════════════
          ARTICLE BODY
      ══════════════════════════════════════════ */}
      <article className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        {renderContent(attrs.content)}
      </article>

      {/* ══════════════════════════════════════════
          PREV / NEXT NAVIGATION
      ══════════════════════════════════════════ */}
      {(prevAttrs || nextAttrs) && (
        <nav
          aria-label="Blog navigation"
          className="max-w-6xl mx-auto px-6 mt-16 mb-14"
        >
          <div className="border-t border-white/10 pt-10 grid grid-cols-2 gap-4">
            {prevAttrs ? (
              <Link
                href={`/blogs/${prevAttrs.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl transition-all duration-200 hover:border-[#8A2BE2]/40 hover:bg-[#8A2BE2]/[0.07]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
                  Previous
                </span>
                <span className="text-sm font-semibold text-zinc-300 leading-snug group-hover:text-white transition-colors line-clamp-2">
                  {prevAttrs.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextAttrs ? (
              <Link
                href={`/blogs/${nextAttrs.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl text-right transition-all duration-200 hover:border-[#8A2BE2]/40 hover:bg-[#8A2BE2]/[0.07]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="flex items-center justify-end gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">
                  Next
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="text-sm font-semibold text-zinc-300 leading-snug group-hover:text-white transition-colors line-clamp-2">
                  {nextAttrs.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}

      <Footer />
    </main>
  );
}