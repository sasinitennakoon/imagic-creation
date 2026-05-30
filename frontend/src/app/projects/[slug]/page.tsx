import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";


/* ─────────────────────────────────────────────
   DATA FETCHING
───────────────────────────────────────────── */

async function getProject(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[slug][$eq]=${slug}&populate[0]=contentBlocks.image&populate[1]=contentBlocks.images&populate[2]=coverImage&populate[3]=gallery&populate[4]=highlight&populate[5]=testimonial&populate[6]=clientLogo`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  return res.json();
}

async function getAllProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?fields[0]=slug&fields[1]=title&sort=publishedAt:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.data ?? [];
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

/** tags field is plain Text in Strapi — comma-separated or JSON array string */
function parseTags(raw: any): string[] {
  if (!raw) return [];
  if (Array.isArray(raw))
    return raw.map((t: any) =>
      typeof t === "string" ? t : t.name ?? String(t)
    );
  if (typeof raw === "string") {
    // try JSON first, fall back to CSV
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {}
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

/** Format Strapi date string to e.g. "March 2024" */
function formatDate(raw: string | null | undefined): string | null {
  if (!raw) return null;
  try {
    return new Date(raw).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } catch {
    return raw;
  }
}

/* ─────────────────────────────────────────────
   BLOCK RENDERER
   Supports: TextBlock, ImageBlock, VideoBlock,
             GalleryBlock, QuoteBlock
───────────────────────────────────────────── */

function renderBlock(block: any) {
  switch (block.__component) {
    /* ── TextBlock ── */
    case "blocks.text-block":
      return (
        <div className="space-y-5">
          {block.text?.map((item: any, i: number) => {
            if (item.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-2xl font-semibold tracking-tight text-white mt-10 mb-3"
                >
                  {item.children?.[0]?.text}
                </h2>
              );
            }
            if (item.type === "paragraph") {
              return (
                <p key={i} className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
                  {item.children?.map((child: any, j: number) =>
                    child.bold ? (
                      <strong key={j} className="font-semibold text-zinc-200">
                        {child.text}
                      </strong>
                    ) : (
                      <span key={j}>{child.text}</span>
                    )
                  )}
                </p>
              );
            }
            if (item.type === "list") {
              return (
                <ul key={i} className="space-y-2 pl-0">
                  {item.children?.map((li: any, j: number) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "#8A2BE2" }}
                      />
                      <span className="leading-7">
                        {li.children?.[0]?.text}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      );

    /* ── ImageBlock ── */
    case "blocks.image-block":
  return block.image?.url ? (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={block.image.url.startsWith("http") ? block.image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image.url}`}
          alt={block.image.alternativeText ?? ""}
          className="w-full h-auto object-contain"
        />
      </div>
      {block.caption && (
        <figcaption className="mt-3 text-center text-sm text-zinc-500">
          {block.caption}
        </figcaption>
      )}
    </figure>
  ) : null;

    /* ── VideoBlock ── */
    case "blocks.video-block":
      return block.url ? (
        <div className="mt-8 overflow-hidden rounded-xl aspect-video bg-zinc-900">
          <iframe
            src={block.url}
            title={block.caption ?? "Video"}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null;

    /* ── GalleryBlock ── */
    case "blocks.gallery-block":
  return (
    <div className="mt-10">
      {block.caption && (
        <h3 className="text-xl font-semibold text-white mb-5">
          {block.caption}
        </h3>
      )}
      <div
        style={{
          columns: "2",
          columnGap: "12px",
        }}
      >
        {block.images?.map((img: any) => (
          <div
            key={img.id}
            style={{
              breakInside: "avoid",
              marginBottom: "12px",
              display: "inline-block",  // ← key fix
              width: "100%",            // ← key fix
            }}
            className="overflow-hidden rounded-xl bg-zinc-900"
          >
            <img
              src={img.url.startsWith("http") ? img.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
              alt={img.alternativeText ?? ""}
              style={{ display: "block", width: "100%", height: "auto" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );

    /* ── QuoteBlock ── */
    case "blocks.quote-block":
      return block.quote ? (
        <blockquote
          className="mt-8 rounded-2xl p-8"
          style={{
            background:
              "linear-gradient(135deg,rgba(138,43,226,.10) 0%,rgba(0,0,0,0) 100%)",
            border: "1px solid rgba(138,43,226,.25)",
          }}
        >
          <p className="text-xl italic text-zinc-200 leading-relaxed">
            {block.quote}
          </p>
          {block.author && (
            <footer className="mt-4 text-sm text-zinc-500">
              — {block.author}
            </footer>
          )}
        </blockquote>
      ) : null;

    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [data, allProjects] = await Promise.all([
    getProject(slug),
    getAllProjects(),
  ]);

  const project = data?.data?.[0];
  if (!project) notFound();

  const attrs = project.attributes ?? project;

  /* ── Prev / Next (across all projects — no category field in schema) ── */
  const currentIndex = allProjects.findIndex(
    (p: any) => (p.attributes ?? p).slug === slug
  );
  const prevAttrs =
    currentIndex > 0
      ? (allProjects[currentIndex - 1].attributes ??
        allProjects[currentIndex - 1])
      : null;
  const nextAttrs =
    currentIndex < allProjects.length - 1
      ? (allProjects[currentIndex + 1].attributes ??
        allProjects[currentIndex + 1])
      : null;

  /* ── Field mappings matching exact Strapi schema ── */
  const clientName: string | null = attrs.client ?? null;          // field: client (Text)
  const clientLogoUrl: string | null = attrs.clientLogo?.url       // field: clientLogo (Media)
    ? attrs.clientLogo.url.startsWith("http") ? attrs.clientLogo.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${attrs.clientLogo.url}`
    : null;
  const formattedDate = formatDate(attrs.date);                    // field: date (Date)
  const tags = parseTags(attrs.tags);                              // field: tags (Text)

  // testimonial is a Repeatable Component — use all entries
  const testimonials: any[] = Array.isArray(attrs.testimonial)
    ? attrs.testimonial
    : attrs.testimonial
    ? [attrs.testimonial]
    : [];

  const hasClient = clientName || clientLogoUrl;
  const hasDetails =
    attrs.projectType || attrs.date || attrs.liveUrl;

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* ══════════════════════════════════════════
          STICKY TOP BAR — back arrow icon only
      ══════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/projects"
            aria-label="Back to projects"
            className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-[#8A2BE2] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-[#8A2BE2] transition-colors duration-200" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HERO  (breadcrumb lives here)
      ══════════════════════════════════════════ */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-10">

        {/* Breadcrumb */}
        {/* Breadcrumb */}
<div className="overflow-x-auto scrollbar-hide">
  <nav className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-zinc-500 mb-6 md:mb-8 whitespace-nowrap min-w-max">
    
    <Link
      href="/"
      className="hover:text-white transition-colors shrink-0"
    >
      Home
    </Link>

    <ChevronRight className="w-3 h-3 text-zinc-700 shrink-0" />

    <Link
      href="/projects"
      className="hover:text-white transition-colors shrink-0"
    >
      Projects
    </Link>

    {attrs.projectType && (
      <>
        <ChevronRight className="w-3 h-3 text-zinc-700 shrink-0" />

        <Link
          href={`/projects?type=${attrs.projectType}`}
          className="hover:text-white transition-colors capitalize shrink-0"
        >
          {attrs.projectType}
        </Link>
      </>
    )}

    <ChevronRight className="w-3 h-3 text-zinc-700 shrink-0" />

    <span className="text-zinc-300 truncate max-w-[180px] sm:max-w-[260px] md:max-w-[400px]">
      {attrs.title}
    </span>
  </nav>
</div>

        {/* Project type pill */}
        {attrs.projectType && (
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(138,43,226,0.15)",
              color: "#8A2BE2",
              border: "1px solid rgba(138,43,226,0.35)",
            }}
          >
            {attrs.projectType}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight md:leading-[1.08]">
          {attrs.title}
        </h1>

        {/* Subtitle */}
        {attrs.subtitle && (
          <p className="mt-4 md:mt-5 text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {attrs.subtitle}
          </p>
        )}

        {/* Highlights */}
        {attrs.highlight?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {attrs.highlight.map((item: any) => (
              <span
                key={item.id}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 bg-white/5 hover:bg-white/10 transition-colors"
              >
                {item.label}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════════
          COVER IMAGE
      ══════════════════════════════════════════ */}
      {attrs.coverImage?.url && (
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="overflow-hidden rounded-2xl bg-zinc-900 aspect-[16/9]"
            style={{ boxShadow: "0 0 80px rgba(138,43,226,0.12)" }}
          >
            <img
              src={attrs.coverImage.url.startsWith("http") ? attrs.coverImage.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${attrs.coverImage.url}`}
              alt={attrs.coverImage.alternativeText ?? attrs.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          TAGS STRIP
      ══════════════════════════════════════════ */}
      {tags.length > 0 && (
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-6 md:mt-8 flex flex-wrap gap-2 py-4 md:py-6 border-y border-white/10">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-xs font-medium"
                style={{
                  background: "rgba(138,43,226,0.12)",
                  color: "#c084fc",
                  border: "1px solid rgba(138,43,226,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          TWO-COLUMN LAYOUT
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 pb-10">

        {/* ────── MAIN CONTENT ────── */}
        <main className="min-w-0">

          {/* Dynamic content blocks */}
          <div className="space-y-6">
            {attrs.contentBlocks?.map((block: any, i: number) => (
              <div key={i}>{renderBlock(block)}</div>
            ))}
          </div>

          {/* Top-level gallery (separate from GalleryBlock) */}
          {attrs.gallery?.length > 0 && (
            <section className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white mt-8 md:mt-10 mb-6">
                Project Gallery
              </h2>
              <div
                style={{
                  columns: "2",
                  columnGap: "12px",
                }}
              >
                {attrs.gallery.map((img: any) => (
                  <div
                    key={img.id}
                    className="overflow-hidden rounded-xl bg-zinc-900 mb-3 break-inside-avoid group"
                  >
                    <img
                      src={img.url.startsWith("http") ? img.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
                      alt={img.alternativeText ?? ""}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials — repeatable component: quote / authorName / authorRole */}
          {testimonials.length > 0 && (
            <section className="mt-16 pt-12 border-t border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white">What They Said</h2>
              {testimonials.map((t: any, i: number) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </section>
          )}
        </main>

        {/* ────── SIDEBAR ────── */}
        <aside className="space-y-4 md:space-y-5 lg:pt-1">

          {/* ── CLIENT CARD ── */}
          {hasClient && (
            <div
              className="rounded-2xl p-4 sm:p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500 mb-5">
                Client
              </p>

              {/* Client name — above the logo */}
              {clientName && (
                <p className="font-semibold text-white text-lg leading-snug mb-4">
                  {clientName}
                </p>
              )}

              {/* Client logo — natural size, capped only at card width */}
              {clientLogoUrl && (
                <div
                  className="w-full rounded-xl py-5 px-4"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <img
                    src={clientLogoUrl}
                    alt={clientName ?? "Client logo"}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          )}

          {/* ── PROJECT DETAILS CARD ── */}
          {hasDetails && (
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="px-6 pt-5 pb-3">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">
                  Project Details
                </p>
              </div>

              <dl className="divide-y divide-white/[0.05]">
                {attrs.projectType && (
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                    <dt className="text-xs text-zinc-500">Type</dt>
                    <dd className="text-sm font-medium text-zinc-200 capitalize">
                      {attrs.projectType}
                    </dd>
                  </div>
                )}
                {formattedDate && (
                  <div className="flex items-center justify-between px-6 py-3.5">
                    <dt className="text-xs text-zinc-500">Date</dt>
                    <dd className="text-sm font-medium text-zinc-200">
                      {formattedDate}
                    </dd>
                  </div>
                )}
                {/* Live site button — only here, never duplicated */}
                {attrs.liveUrl && (
                  <div className="px-6 py-4">
                    <a
                      href={
                        attrs.liveUrl.startsWith("http")
                          ? attrs.liveUrl
                          : `https://${attrs.liveUrl}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        background:
                          "linear-gradient(135deg,#8A2BE2 0%,#6a1db5 100%)",
                        color: "#fff",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit Live Site
                    </a>
                  </div>
                )}
              </dl>
            </div>
          )}
        </aside>
      </div>

      {/* ══════════════════════════════════════════
          PREV / NEXT NAVIGATION
          Only renders when siblings exist
      ══════════════════════════════════════════ */}
      {(prevAttrs || nextAttrs) && (
        <nav
          aria-label="Project navigation"
          className="max-w-6xl mx-auto px-6 mt-20 mb-14"
        >
          <div className="border-t border-white/10 pt-8 md:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {prevAttrs ? (
              <Link
                href={`/projects/${prevAttrs.slug}`}
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
                <span className="text-sm md:text-base font-semibold text-zinc-300 leading-snug">
                  {prevAttrs.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextAttrs ? (
              <Link
                href={`/projects/${nextAttrs.slug}`}
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
                <span className="text-sm md:text-base font-semibold text-zinc-300 leading-snug">
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
    </div>
    
  );
}