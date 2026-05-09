import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  projectType?: string;
  coverImage?: {
    url?: string;
  };
};

type ProjectsResponse = {
  data?: Project[];
};

async function getProjects(): Promise<ProjectsResponse> {
      const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*&sort=createdAt:desc`,
      { cache: "no-store" }
    );

      return res.json();
    }

const categoryColors: Record<string, string> = {
  "web development": "bg-blue-500/20 text-white",
  "web design": "bg-purple-500/20 text-white",
  "video production": "bg-pink-500/20 text-white",
  photography: "bg-yellow-500/20 text-white",
  editing: "bg-green-500/20 text-white",
  "graphic design": "bg-orange-500/20 text-white",
  "live production": "bg-red-500/20 text-white",
};

const filters = [
  { label: "All", value: "all" },
  { label: "Photography", value: "Photography" },
  { label: "Video Production", value: "Video Production" },
  { label: "Live Production", value: "Live Production" },
  { label: "Editing", value: "Editing" },
  { label: "Web Design", value: "Web Design" },
  { label: "Web Development", value: "Web Development" },
  { label: "Graphic Design", value: "Graphic Design" },
];

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const activeFilter = params?.type || "all";
  const data = await getProjects();
  const projects = data.data || [];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.projectType?.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="w-full bg-[#0F0F0F] text-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-20 md:mb-24">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Work
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed text-sm md:text-base">
            Explore our creative portfolio featuring projects in photography,
            production, design, branding, development, and digital experiences.
          </p>
        </div>

        {/* FILTER CHIPS */}
        <div className="mt-12 bg-[#1E1E1E] border border-white/10 rounded-2xl p-4 flex flex-wrap justify-center gap-3">
          {filters.map((item) => {
            const isActive =
              activeFilter.toLowerCase() === item.value.toLowerCase();

            return (
              <Link
                key={item.value}
                href={
                  item.value === "all"
                    ? "/projects"
                    : `/projects?type=${encodeURIComponent(item.value)}`
                }
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#C51BE2] to-[#8A2BE2] text-white"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {filteredProjects.map((p, index) => {
            const img = p.coverImage?.url;
            const normalizedType = p.projectType?.toLowerCase() || "";

            // Big card first in every group
            const isLarge = index % 5 === 0;

            return (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className={`group bg-[#1E1E1E] border border-[#8A2BE2]/20 rounded-2xl overflow-hidden hover:border-[#8A2BE2]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[240px]">
                  {img && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* CATEGORY */}
                  <span
                    className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur-md ${
                      categoryColors[normalizedType] ||
                      "bg-white/10 text-white"
                    }`}
                  >
                    {p.projectType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  
                  {/* TITLE */}
                  <h2
                    className={`font-semibold leading-tight ${
                      isLarge
                        ? "text-2xl md:text-3xl"
                        : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h2>

                  {/* SUBTITLE */}
                  <p
                    className={`text-gray-400 leading-relaxed mt-3 ${
                      isLarge
                        ? "text-base"
                        : "text-sm"
                    }`}
                  >
                    {p.subtitle}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-auto pt-8">
                    <div className="w-full h-px bg-white/10 mb-5" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white group-hover:underline">
                        Read More
                      </span>

                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
       <Footer />
    </section>
   
  );
}
