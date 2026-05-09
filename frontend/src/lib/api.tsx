const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getFeaturedProjects() {
  const res = await fetch(
    `${API_URL}/api/projects?filters[featured][$eq]=true&populate=*`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function getTestimonials() {
  const res = await fetch(
    `${API_URL}/api/testimonials?populate=*`
  );
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  return res.json();
}

export async function getProjects() {
  const res = await fetch(
    `${API_URL}/api/projects?populate=*`
  );
  return res.json();
}

export async function getBlogs() {
  const res = await fetch(
    `${API_URL}/api/blogs?populate=*`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function getBlogBySlug(slug: string) {
  if (!slug) return null;
  const res = await fetch(
    `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  return res.json();
}