async function getProject(slug: string) {
  const res = await fetch(
    `http://localhost:1337/api/projects?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  return res.json();
}

/* ---------------- DYNAMIC BLOCK RENDERER ---------------- */

function renderBlock(block: any) {
  switch (block.__component) {
    case "blocks.text-block":
      return (
        <div className="space-y-4">
          {block.text?.map((item: any, i: number) => {
            
            if (item.type === "heading") {
              return (
                <h2 key={i} className="text-2xl font-semibold mt-8">
                  {item.children?.[0]?.text}
                </h2>
              );
            }

            if (item.type === "paragraph") {
              return (
                <p key={i} className="text-base leading-7 text-gray-600">
                  {item.children?.[0]?.text}
                </p>
              );
            }

            if (item.type === "list") {
              return (
                <ul key={i} className="list-disc pl-6 text-gray-600">
                  {item.children?.map((li: any, j: number) => (
                    <li key={j}>{li.children?.[0]?.text}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      );

    case "blocks.gallery-block":
      return (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">{block.caption}</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {block.images?.map((img: any) => (
              <img
                key={img.id}
                src={`http://localhost:1337${img.url}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ---------------- PAGE ---------------- */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getProject(slug);
  const project = data.data?.[0];

  if (!project) return <div className="p-10">Project not found</div>;

  const attrs = project.attributes ?? project;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">{attrs.title}</h1>
      <p className="text-lg text-gray-500 mt-3">{attrs.subtitle}</p>

      {/* LIVE URL */}
      {attrs.liveUrl && (
        <a
          href={`https://${attrs.liveUrl}`}
          target="_blank"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Visit Live Site →
        </a>
      )}

      {/* HIGHLIGHTS */}
      {attrs.highlight?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {attrs.highlight.map((item: any) => (
            <span
              key={item.id}
              className="px-3 py-1 border rounded-full text-sm text-gray-600"
            >
              {item.label}
            </span>
          ))}
        </div>
      )}

      {/* COVER IMAGE */}
      {attrs.coverImage && (
        <img
          src={`http://localhost:1337${attrs.coverImage.url}`}
          className="w-full mt-8 rounded-xl"
        />
      )}

      {/* GALLERY (TOP LEVEL) */}
      {attrs.gallery?.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {attrs.gallery.map((img: any) => (
              <img
                key={img.id}
                src={`http://localhost:1337${img.url}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* DYNAMIC CONTENT */}
      <div className="mt-12 space-y-6">
        {attrs.contentBlocks?.map((block: any, i: number) => (
          <div key={i}>{renderBlock(block)}</div>
        ))}
      </div>

    </div>
  );
}