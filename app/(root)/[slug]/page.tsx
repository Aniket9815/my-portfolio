import { getProjectBySlug, getProjects } from "@/actions/project.actions";

export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const projects: ProjectType[] = await getProjects();

  return projects.map((project) => ({
    slug: String(project.slug),
  }));
}

export default async function ProjectDescription({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project: ProjectType = await getProjectBySlug((await params).slug);

  if (!project) return null;
  
  return <main>{project.title}</main>;
}
