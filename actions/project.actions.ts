import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";

export async function getProjects(): Promise<ProjectType[]> {
  return await sanityFetch({
    query: PROJECTS_QUERY,
    tags: ["project"],
  });
}

export async function getProjectBySlug(slug: string): Promise<ProjectType> {
  return await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    tags: ["project", `project-${slug}`],
  });
}
