export type Service = {
  title: string;
  subtitle: string;
  heroImage: string;
  whatWeDoImage: string;
  whatWeDo: string;
  services: { title: string; desc: string }[];
  process: { title: string; desc: string; gif: string }[];
};

export const servicesData: Record<string, Service> = {
  // ── key must match the slug in Services.tsx ──────────────────────────────

  photography: {
    title: "Photography",
    subtitle: "Capturing timeless visual stories that define your brand.",
    heroImage: "/services/photo.jpg",
    whatWeDoImage: "/services/photo-2.jpg",
    whatWeDo:
      "We deliver professional photography services tailored to brands, events, and products. Every shot is composed with intention to tell your story authentically.",
    services: [
      { title: "Corporate Photography", desc: "Professional branding shoots for teams and offices." },
      { title: "Event Coverage", desc: "Full event documentation with storytelling." },
      { title: "Product Photography", desc: "Clean, compelling imagery for e-commerce and marketing." },
    ],
    process: [
      { title: "Discovery", desc: "Understanding your vision and goals.", gif: "/process/1.gif" },
      { title: "Planning", desc: "Shot list, locations, and scheduling.", gif: "/process/2.gif" },
      { title: "Shooting", desc: "Capturing high-quality visuals on location.", gif: "/process/3.gif" },
      { title: "Delivery", desc: "Edited, retouched, and ready to use.", gif: "/process/4.gif" },
    ],
  },

  "video-production": {
    title: "Video Production",
    subtitle: "Cinematic storytelling for brands that want to stand out.",
    heroImage: "/services/video.jpg",
    whatWeDoImage: "/services/video-2.jpg",
    whatWeDo:
      "We create cinematic videos for commercial and brand storytelling. From concept to final cut, every frame is crafted with purpose.",
    services: [
      { title: "Commercial Videos", desc: "High-end advertising content for campaigns." },
      { title: "Corporate Films", desc: "Professional brand storytelling and culture videos." },
      { title: "Social Media Videos", desc: "Short-form content optimised for every platform." },
    ],
    process: [
      { title: "Script Writing", desc: "Building a strong narrative structure.", gif: "/process/1.gif" },
      { title: "Pre-Production", desc: "Planning, casting, and location scouting.", gif: "/process/2.gif" },
      { title: "Production", desc: "Filming with professional crew and equipment.", gif: "/process/3.gif" },
      { title: "Post-Production", desc: "Editing, color grading, and sound design.", gif: "/process/4.gif" },
    ],
  },

  "live-production": {
    title: "Live Production",
    subtitle: "Professional live streaming and multi-camera event coverage.",
    heroImage: "/services/live.jpg",
    whatWeDoImage: "/services/live-2.jpg",
    whatWeDo:
      "We manage end-to-end live production for events, conferences, and performances — ensuring a flawless broadcast every time.",
    services: [
      { title: "Live Streaming", desc: "Multi-platform broadcast for any event scale." },
      { title: "Multi-Camera Coverage", desc: "Seamless switching between camera angles." },
      { title: "Live Graphics", desc: "Real-time lower thirds, overlays, and branding." },
    ],
    process: [
      { title: "Briefing", desc: "Understanding event scope and requirements.", gif: "/process/1.gif" },
      { title: "Setup", desc: "Equipment installation and technical checks.", gif: "/process/2.gif" },
      { title: "Live Direction", desc: "Real-time production management.", gif: "/process/3.gif" },
      { title: "Replay & Archive", desc: "Post-event recordings and highlights.", gif: "/process/4.gif" },
    ],
  },

  editing: {
    title: "Editing",
    subtitle: "Expert editing and post-production that elevates your content.",
    heroImage: "/services/edit.jpg",
    whatWeDoImage: "/services/edit-2.jpg",
    whatWeDo:
      "Our editors transform raw footage into polished, compelling content through precise cuts, color grading, and sound design.",
    services: [
      { title: "Video Editing", desc: "Precise cuts and pacing for maximum impact." },
      { title: "Color Grading", desc: "Cinematic color treatment to set the mood." },
      { title: "Sound Design", desc: "Audio mixing, music, and voice-over integration." },
    ],
    process: [
      { title: "Footage Review", desc: "Selecting the best raw material.", gif: "/process/1.gif" },
      { title: "Rough Cut", desc: "Building the structural edit.", gif: "/process/2.gif" },
      { title: "Fine Cut", desc: "Refining timing, transitions, and flow.", gif: "/process/3.gif" },
      { title: "Final Delivery", desc: "Exporting in all required formats.", gif: "/process/4.gif" },
    ],
  },

  "web-designing": {
    title: "Web Designing",
    subtitle: "Intuitive, user-focused designs that drive engagement.",
    heroImage: "/services/ui.jpg",
    whatWeDoImage: "/services/ui-2.jpg",
    whatWeDo:
      "We design beautiful, functional interfaces that align with your brand and guide users effortlessly through your digital experience.",
    services: [
      { title: "UI/UX Design", desc: "User-centered interface and experience design." },
      { title: "Wireframing", desc: "Structural blueprints before visual design." },
      { title: "Prototyping", desc: "Interactive mockups for testing and approval." },
    ],
    process: [
      { title: "Research", desc: "Understanding users and competitors.", gif: "/process/1.gif" },
      { title: "Wireframes", desc: "Mapping out layout and structure.", gif: "/process/2.gif" },
      { title: "Design", desc: "Creating high-fidelity visual designs.", gif: "/process/3.gif" },
      { title: "Handoff", desc: "Developer-ready files and design tokens.", gif: "/process/4.gif" },
    ],
  },

  "web-development": {
    title: "Web Development",
    subtitle: "Fast, responsive websites built with modern technologies.",
    heroImage: "/services/develop.jpg",
    whatWeDoImage: "/services/develop-2.jpg",
    whatWeDo:
      "We build high-performance websites and web applications using modern frameworks, with a focus on speed, accessibility, and scalability.",
    services: [
      { title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces." },
      { title: "CMS Integration", desc: "Easy content management with headless CMS." },
      { title: "Performance Optimisation", desc: "Fast load times and Core Web Vitals scores." },
    ],
    process: [
      { title: "Planning", desc: "Tech stack selection and architecture.", gif: "/process/1.gif" },
      { title: "Development", desc: "Building components and integrations.", gif: "/process/2.gif" },
      { title: "Testing", desc: "QA across devices and browsers.", gif: "/process/3.gif" },
      { title: "Launch", desc: "Deployment, monitoring, and support.", gif: "/process/4.gif" },
    ],
  },

  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Eye-catching visuals that communicate your brand effectively.",
    heroImage: "/services/design.jpg",
    whatWeDoImage: "/services/design-2.jpg",
    whatWeDo:
      "From brand identity to marketing collateral, our designers create visuals that make a lasting impression and tell your story at a glance.",
    services: [
      { title: "Brand Identity", desc: "Logo, typography, and visual language." },
      { title: "Print Design", desc: "Brochures, posters, and marketing materials." },
      { title: "Social Media Design", desc: "On-brand templates and campaign graphics." },
    ],
    process: [
      { title: "Brief", desc: "Clarifying goals, audience, and style.", gif: "/process/1.gif" },
      { title: "Concepts", desc: "Exploring multiple creative directions.", gif: "/process/2.gif" },
      { title: "Refinement", desc: "Narrowing down and polishing the chosen direction.", gif: "/process/3.gif" },
      { title: "Delivery", desc: "Final files in all required formats.", gif: "/process/4.gif" },
    ],
  },
};