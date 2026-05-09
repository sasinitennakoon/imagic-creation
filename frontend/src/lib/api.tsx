export async function getFeaturedProjects() {
  const res = await fetch(
    "http://localhost:1337/api/projects?filters[featured][$eq]=true&populate=*",
    { cache: "no-store" }
  );

  return res.json();
}

export async function getTestimonials() {
  const res = await fetch(
    "http://localhost:1337/api/testimonials?populate=*"
  );

  if (!res.ok) throw new Error("Failed to fetch testimonials");

  return res.json();
}

export async function getProjects() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*");
  return res.json();
}

const API_URL = "http://localhost:1337/api";

export async function getBlogs() {
  const res = await fetch(
    "http://localhost:1337/api/blogs?populate=*",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getBlogBySlug(slug: string) {
  if (!slug) return null;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`,
    { cache: "no-store" }
  );

  return res.json();
}