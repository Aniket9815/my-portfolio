import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {
  const projects: ProjectType[] = await sanityFetch({
    query: PROJECTS_QUERY,
    tags: ["project"],
  });

  return (
    <main>
      {projects.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </main>
  );
}
